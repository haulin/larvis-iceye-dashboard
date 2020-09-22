import React from "react";
import { Progress, Space, Typography } from "antd";
import { BarChartOutlined } from "@ant-design/icons";
import {
  ScatterChart,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import { Acquisition, getAcquisitions } from "utils";
import "./Acquisitions.less";

interface processedAcquisitions {
  avg: string;
  data: Acquisition[];
  daily: { [key: string]: number };
  dailyMax?: { date: string; amount: number };
  max: number;
  total: number;
}

const processAcquisitions = (acquisitions: Acquisition[]) => {
  let data = acquisitions.sort((a, b) => a.timestamp - b.timestamp) || [];
  data = data.map((item) => {
    return {
      ...item,
      date: new Date(item.timestamp * 1000).toISOString(),
    };
  });
  const total = data.reduce((acc, cur) => {
    return acc + cur.ore_sites;
  }, 0);
  const avg = (total / data.length).toFixed(2);
  const max =
    [...data].sort((a, b) => b.ore_sites - a.ore_sites).shift()?.ore_sites || 0;
  const daily = data.reduce((acc, cur) => {
    const curShortDate = cur.date?.substring(5, 10) || "unknown date";
    if (!acc.hasOwnProperty(curShortDate)) {
      acc[curShortDate] = cur.ore_sites;
    } else {
      acc[curShortDate] += cur.ore_sites;
    }
    return acc;
  }, {});
  const dailyMax = Object.keys(daily)
    .map((date) => {
      return {
        date,
        amount: daily[date],
      };
    })
    .sort((a, b) => b.amount - a.amount)
    .shift();
  return {
    avg,
    daily,
    dailyMax,
    data,
    max,
    total,
  };
};

export const Acquisitions: React.FC = () => {
  const [acquisitions, setAcquisitions] = React.useState<processedAcquisitions>(
    {
      avg: "",
      daily: {},
      dailyMax: { date: "0-00", amount: 0 },
      data: [],
      max: 0,
      total: 0,
    }
  );

  React.useEffect(() => {
    async function getAcq() {
      const response = await getAcquisitions();
      const results = processAcquisitions(response?.parsedBody ?? []);
      setAcquisitions(results);
    }
    getAcq();
  }, []);

  return (
    <div className="acquisitions">
      <Space>
        <BarChartOutlined className="acquisitions__icon" />
        <Typography.Title>Monthly acquisitions</Typography.Title>
      </Space>
      <div className="acquisitions__section">
        <Typography.Title level={2}>Ore sites statistics</Typography.Title>
        <div className="acquisitions__stats">
          <div>
            <Typography.Title level={3}>Total</Typography.Title>
            <Progress
              type="circle"
              percent={99.9}
              format={() => acquisitions.total}
              strokeColor={{
                "0%": "#17b794",
                "50%": "#141414",
                "100%": "#28518a",
              }}
            />
          </div>
          <div>
            <Typography.Title level={3}>Average</Typography.Title>
            <Progress
              type="circle"
              percent={99.9}
              format={() => acquisitions.avg}
              strokeColor={{
                "0%": "#e47676",
                "50%": "#141414",
                "100%": "#8f1383",
              }}
            />
          </div>
          <div>
            <Typography.Title level={3}>Maximum</Typography.Title>
            <Progress
              type="circle"
              percent={99.9}
              format={() => acquisitions.max}
              strokeColor={{
                "0%": "#ffc045",
                "50%": "#141414",
                "100%": "#0a91ab",
              }}
            />
          </div>
          <div>
            <Typography.Title level={3}>Daily Maximum</Typography.Title>
            <Progress
              type="circle"
              percent={99.9}
              format={() => acquisitions.dailyMax?.amount}
              strokeColor={{
                "0%": "#80ff80",
                "50%": "#141414",
                "100%": "#d65a31",
              }}
            />
          </div>
        </div>
      </div>
      <div className="acquisitions__section">
        <Typography.Title level={2}>Daily breakdown</Typography.Title>
        <div className="acquisitions__daily">
          {Object.keys(acquisitions.daily).map((date) => (
            <div
              style={{
                border: `1px solid rgba(128, 255, 0, ${
                  acquisitions.daily[date] /
                  (acquisitions.dailyMax?.amount || 100)
                })`,
              }}
            >
              <div style={{ color: "grey" }}>{date}</div>
              <b>{acquisitions.daily[date]}</b>
            </div>
          ))}
        </div>
      </div>
      <Typography.Title level={2}>All data points</Typography.Title>
      <div className="acquisitions__chart">
        <ResponsiveContainer>
          <ScatterChart
            data={acquisitions.data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 0,
            }}
            layout="vertical"
          >
            <XAxis
              dataKey="ore_sites"
              domain={["dataMin", "dataMax"]}
              type="number"
            />
            <YAxis
              dataKey="date"
              interval="preserveStartEnd"
              tickFormatter={(date) => date.substring(5, 10)}
              type="category"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter dataKey="ore_sites" fill="#17b794" label />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

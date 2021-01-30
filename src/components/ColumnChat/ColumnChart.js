import Chart from "react-apexcharts";

function ColumnChart({ data }) {
  console.log(data);
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ],
    },
    yaxis: {
      title: {
        text: "₺ (Türk Lirası)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " ₺";
        },
      },
    },
  };

  const series = [
    {
      data: data,
    },
  ];

  return (
    <div id="bar">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={350}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default ColumnChart;

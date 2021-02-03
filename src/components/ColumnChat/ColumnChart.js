import Chart from "react-apexcharts";

function ColumnChart({ data }) {
  const series = [
    {
      data: data ? data : [],
    },
  ];

  const options = {
    chart: {
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
      curve: "smooth",
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

  return (
    <div id="bar">
      <Chart
        options={options}
        series={series}
        type="area"
        height={350}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default ColumnChart;

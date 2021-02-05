import Chart from "react-apexcharts";

function ColumnChart({ chartData, color }) {
  let title = [];
  let price = [];

  const monthName = (date) => {
    const month = date.split("-")[1];
    const monthName = [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ];
    switch (month) {
      case "01":
        return monthName[0];
      case "02":
        return monthName[1];
      case "03":
        return monthName[2];
      case "04":
        return monthName[3];
      case "05":
        return monthName[4];
      case "06":
        return monthName[5];
      case "07":
        return monthName[6];
      case "08":
        return monthName[7];
      case "09":
        return monthName[8];
      case "10":
        return monthName[9];
      case "11":
        return monthName[10];
      case "12":
        return monthName[11];

      default:
        return "Ay";
    }
  };

  if (chartData.length > 0) {
    chartData.forEach((dt) => {
      title.push(monthName(dt.title));
      price.push(dt.price);
    });
  }

  const series = [
    {
      name: "Fiyat:",
      data: price,
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
      style: {
        colors: color,
      },
    },
    fill: {
      colors: color,
    },
    colors: color,
    stroke: {
      curve: "smooth",
    },

    xaxis: {
      categories: title,
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

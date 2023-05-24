const renderLineChart = (data, labels) => {
  var ctx1 = document.getElementById("linechart").getContext("2d");
  ctx1.height = 100;
  const linelabel = labels;
  const linedata = data;
  const datasets = [];
  for (let i = 0; i < linelabel.length; i++) {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const obj = {
      label: linelabel[i],
      data: linedata[i],
      backgroundColor: color,
      borderColor: color,
      borderWidth: 1,
      fill: false,
    };
    datasets.push(obj);
  }
  console.log(datasets);
  var myLineChart = new Chart(ctx1, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],  
      datasets: datasets,
    },


    options: {
      title: {
        display: true,
        text: "Expense per Category",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};

const renderPieCharts = (data, labels) => {
  var ctx = document.getElementById("myChart").getContext("2d");
  ctx.height = 100;

  var myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Last one month expense",
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
          radius: 150,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Expense per Category",
      },
    },
  });
};

const getLineChartData = () => {
  console.log("fetching");
  fetch("/expense_week")
    .then((res) => res.json())
    .then((results) => {
      console.log("results", results);
      const category_data = results.expense_category;
      const [labels, data] = [
        Object.keys(category_data),
        Object.values(category_data),
      ];
      //   console.log(labels);
      renderLineChart(data, labels);
    });
};

const getChartData = () => {
  console.log("fetching");
  fetch("/expense_week")
    .then((res) => res.json())
    .then((results) => {
      console.log("results", results);
      const category_data = results.expense_category_data;
      const [labels, data] = [
        Object.keys(category_data),
        Object.values(category_data),
      ];
      renderPieCharts(data, labels);
    });
};

document.onload = getChartData();
document.onload = getLineChartData();

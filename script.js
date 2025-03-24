
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "doughnut", // Тип графика (столбчатая диаграмма)
  data: {
    labels: [
      "Pubg",
      "Brawl Stars",
      "Genshin Impact",
      "Minecraft",
      "Clash of Clans",
      "Clash Royale",
      "Among Us",
    ],
    datasets: [
      {
        label: [
          "Otishmo"
        ],
        data: [30, 19, 10, 5, 1, 1, 1],
        borderWidth: 10,
        backgroundColor: [
          "#3cff00",
          "#ffcc00",
          "#ff5733",
          "#3399ff",
          "#9900cc",
          "#ff3399",
        ],
        hoverOffset: 4,
      },
      {
        label: [
          "Simulator"
        ],
        data: [2, 3, 4, 6,6,2,8],
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ff9f40",
          "#4bc0c0",
          "#9966ff",
          "#ffcd56",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    animation: {
      duration: 2000, // Время анимации (2 сек)
      easing: "easeInOutBounce", // Эффект "отскока"
    },
  },
});

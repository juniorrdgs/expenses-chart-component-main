chartData.map((item, index) => {
    let chartItem = document.querySelector('.models .chart-item').cloneNode(true);
    chartItem.querySelector('.bar').style.height = `calc(${item.amount}px * 3)`;
    chartItem.querySelector('.title').innerHTML = item.day;
    //console.log(chartItem)
    document.querySelector('.chart-area').append(chartItem);
})
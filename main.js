

let  barChartBuilder = (arr) => {
    let colums = arr.length;
    let rows = Math.max.apply(null,arr);
    let barChartItem = document.createElement('div');
    let colNumbers = document.createElement('div');
    let rowNumbers = document.createElement('div');
    let color;
    let chartsField = document.querySelector('.barCharts');
    let rowField = document.querySelector('.row-number');
    let colField =   document.querySelector('.col-number');
    return (() => {
        //create column item
        for(let i = 0; i <= colums; ++i) {
           colField.insertBefore(
               colNumbers.cloneNode(true),
               colField.lastChild
            );
            colNumbers.classList.add('column-num');
            colNumbers.innerHTML = i+1;
        }

        //create rows item
        for(let i = 0; i <= rows; i++) {
        
            rowField.insertBefore(
                rowNumbers.cloneNode(true),
                rowField.firstChild
            );

            rowNumbers.classList.add('rows-num');
            rowNumbers.innerHTML = i+1;
        };

        let height = document.querySelector('.rows-num').offsetHeight;
        //check height of element
        let width = document.querySelector('.column-num').offsetWidth;
        //check width of element

        //create our barCharts
        for(let i = 0; i<=colums; i++) {
            
            if (arr[i] <= 5) {
                color = 'green';
            }else if (arr[i] <= 10) {
                color = 'yellow';
            }else {
                color = 'red';
            }
            //check the color depending on the value
            chartsField.insertBefore(
                barChartItem.cloneNode(true), 
                chartsField.lastChild
            );

            barChartItem.innerHTML = arr[i];
            barChartItem.style.backgroundColor=color;
            barChartItem.style.width = (width + '.58') + 'px';
            barChartItem.style.height = arr[i] * (height + '.3') + 'px';
           
         
        }
    })();
};
let arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
barChartBuilder(arr);
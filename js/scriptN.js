// ________________________________ RATE SECTION ________________________________ \\
function rateSectionFunc(){
    // ________________ CURRENCY
        // VARIABLEs
        let currencyChageRate = document.querySelector('.currencyChageRate');
        let insertUSDRate = document.querySelector('.insertUSDRate');
        let insertEURRate = document.querySelector('.insertEURRate');
        let insertPLNRate = document.querySelector('.insertPLNRate');
        let UAHNum = '980';
        let PLNNum = '985';
        let USDNum ='840';
        let EURNum ='978';
        let arr ={};
        let NowUSD = 0;
        let NowEUR = 0;
        let NowPLN = 0;
        // FUNCTIONS
        async function CurrencySelectRate(){
            let valueCurr = currencyChageRate.value;
            if(valueCurr=='Mono'){
                // There is a limit on the number of requests to the server, the array saved in the "array.js" folder. Updated as of 04/20/2023
                    // OR API
                // let resMono = await fetch('https://api.monobank.ua/bank/currency');
                // let data = await resMono.json();
                // let result = await data;
                // console.log(result)
                    // OR SAVED ARRAY
                let nemw = [{"currencyCodeA":840,"currencyCodeB":980,"date":1682287274,"rateBuy":36.65,"rateCross":0,"rateSell":37.4406},{"currencyCodeA":978,"currencyCodeB":980,"date":1682320807,"rateBuy":40.25,"rateCross":0,"rateSell":41.3993},{"currencyCodeA":978,"currencyCodeB":840,"date":1682287274,"rateBuy":1.092,"rateCross":0,"rateSell":1.102},{"currencyCodeA":826,"currencyCodeB":980,"date":1682329832,"rateBuy":0,"rateCross":46.6316,"rateSell":0},{"currencyCodeA":392,"currencyCodeB":980,"date":1682329687,"rateBuy":0,"rateCross":0.2803,"rateSell":0},{"currencyCodeA":756,"currencyCodeB":980,"date":1682329831,"rateBuy":0,"rateCross":42.084,"rateSell":0},{"currencyCodeA":156,"currencyCodeB":980,"date":1682329710,"rateBuy":0,"rateCross":5.4364,"rateSell":0},{"currencyCodeA":784,"currencyCodeB":980,"date":1682329822,"rateBuy":0,"rateCross":10.184,"rateSell":0},{"currencyCodeA":971,"currencyCodeB":980,"date":1663425223,"rateBuy":0,"rateCross":0.4252,"rateSell":0},{"currencyCodeA":8,"currencyCodeB":980,"date":1682329768,"rateBuy":0,"rateCross":0.3667,"rateSell":0},{"currencyCodeA":51,"currencyCodeB":980,"date":1682328967,"rateBuy":0,"rateCross":0.0971,"rateSell":0},{"currencyCodeA":973,"currencyCodeB":980,"date":1682258448,"rateBuy":0,"rateCross":0.0739,"rateSell":0},{"currencyCodeA":32,"currencyCodeB":980,"date":1682329066,"rateBuy":0,"rateCross":0.1715,"rateSell":0},{"currencyCodeA":36,"currencyCodeB":980,"date":1682329807,"rateBuy":0,"rateCross":25.2771,"rateSell":0},{"currencyCodeA":944,"currencyCodeB":980,"date":1682329782,"rateBuy":0,"rateCross":22.0323,"rateSell":0},{"currencyCodeA":50,"currencyCodeB":980,"date":1682329652,"rateBuy":0,"rateCross":0.353,"rateSell":0},{"currencyCodeA":975,"currencyCodeB":980,"date":1682329822,"rateBuy":0,"rateCross":21.0345,"rateSell":0},{"currencyCodeA":48,"currencyCodeB":980,"date":1682282562,"rateBuy":0,"rateCross":99.5361,"rateSell":0},{"currencyCodeA":108,"currencyCodeB":980,"date":1538606522,"rateBuy":0,"rateCross":0.0158,"rateSell":0},{"currencyCodeA":96,"currencyCodeB":980,"date":1681712199,"rateBuy":0,"rateCross":28.363,"rateSell":0},{"currencyCodeA":68,"currencyCodeB":980,"date":1682286562,"rateBuy":0,"rateCross":5.4587,"rateSell":0},{"currencyCodeA":986,"currencyCodeB":980,"date":1682328888,"rateBuy":0,"rateCross":7.4343,"rateSell":0},{"currencyCodeA":72,"currencyCodeB":980,"date":1681978995,"rateBuy":0,"rateCross":2.8521,"rateSell":0},{"currencyCodeA":933,"currencyCodeB":980,"date":1682329349,"rateBuy":0,"rateCross":12.7372,"rateSell":0},{"currencyCodeA":124,"currencyCodeB":980,"date":1682329753,"rateBuy":0,"rateCross":27.7968,"rateSell":0},{"currencyCodeA":976,"currencyCodeB":980,"date":1655462332,"rateBuy":0,"rateCross":0.0163,"rateSell":0},{"currencyCodeA":152,"currencyCodeB":980,"date":1682322462,"rateBuy":0,"rateCross":0.0471,"rateSell":0},{"currencyCodeA":170,"currencyCodeB":980,"date":1682329744,"rateBuy":0,"rateCross":0.0082,"rateSell":0},{"currencyCodeA":188,"currencyCodeB":980,"date":1682322126,"rateBuy":0,"rateCross":0.07,"rateSell":0},{"currencyCodeA":192,"currencyCodeB":980,"date":1682114406,"rateBuy":0,"rateCross":1.5237,"rateSell":0},{"currencyCodeA":203,"currencyCodeB":980,"date":1682329832,"rateBuy":0,"rateCross":1.75,"rateSell":0},{"currencyCodeA":262,"currencyCodeB":980,"date":1678810696,"rateBuy":0,"rateCross":0.2108,"rateSell":0},{"currencyCodeA":208,"currencyCodeB":980,"date":1682329767,"rateBuy":0,"rateCross":5.5233,"rateSell":0},{"currencyCodeA":12,"currencyCodeB":980,"date":1682326045,"rateBuy":0,"rateCross":0.2758,"rateSell":0},{"currencyCodeA":818,"currencyCodeB":980,"date":1682329717,"rateBuy":0,"rateCross":1.214,"rateSell":0},{"currencyCodeA":230,"currencyCodeB":980,"date":1682279219,"rateBuy":0,"rateCross":0.6933,"rateSell":0},{"currencyCodeA":981,"currencyCodeB":980,"date":1682329756,"rateBuy":0,"rateCross":15.1303,"rateSell":0},{"currencyCodeA":936,"currencyCodeB":980,"date":1682329362,"rateBuy":0,"rateCross":3.286,"rateSell":0},{"currencyCodeA":270,"currencyCodeB":980,"date":1682288296,"rateBuy":0,"rateCross":0.6324,"rateSell":0},{"currencyCodeA":324,"currencyCodeB":980,"date":1681911999,"rateBuy":0,"rateCross":0.0044,"rateSell":0},{"currencyCodeA":344,"currencyCodeB":980,"date":1682328315,"rateBuy":0,"rateCross":4.7761,"rateSell":0},{"currencyCodeA":191,"currencyCodeB":980,"date":1680625280,"rateBuy":0,"rateCross":5.4258,"rateSell":0},{"currencyCodeA":348,"currencyCodeB":980,"date":1682329798,"rateBuy":0,"rateCross":0.1096,"rateSell":0},{"currencyCodeA":360,"currencyCodeB":980,"date":1682329815,"rateBuy":0,"rateCross":0.0025,"rateSell":0},{"currencyCodeA":376,"currencyCodeB":980,"date":1682329808,"rateBuy":0,"rateCross":10.2823,"rateSell":0},{"currencyCodeA":356,"currencyCodeB":980,"date":1682329364,"rateBuy":0,"rateCross":0.4566,"rateSell":0},{"currencyCodeA":368,"currencyCodeB":980,"date":1682320039,"rateBuy":0,"rateCross":0.0285,"rateSell":0},{"currencyCodeA":364,"currencyCodeB":980,"date":1682114406,"rateBuy":0,"rateCross":0.0009,"rateSell":0},{"currencyCodeA":352,"currencyCodeB":980,"date":1682329738,"rateBuy":0,"rateCross":27.3733,"rateSell":0},{"currencyCodeA":400,"currencyCodeB":980,"date":1682329643,"rateBuy":0,"rateCross":52.8585,"rateSell":0},{"currencyCodeA":404,"currencyCodeB":980,"date":1682318297,"rateBuy":0,"rateCross":0.2768,"rateSell":0},{"currencyCodeA":417,"currencyCodeB":980,"date":1682323117,"rateBuy":0,"rateCross":0.428,"rateSell":0},{"currencyCodeA":116,"currencyCodeB":980,"date":1682157155,"rateBuy":0,"rateCross":0.0092,"rateSell":0},{"currencyCodeA":408,"currencyCodeB":980,"date":1682114406,"rateBuy":0,"rateCross":16.6221,"rateSell":0},{"currencyCodeA":410,"currencyCodeB":980,"date":1682329806,"rateBuy":0,"rateCross":0.0283,"rateSell":0},{"currencyCodeA":414,"currencyCodeB":980,"date":1682255019,"rateBuy":0,"rateCross":122.3349,"rateSell":0},{"currencyCodeA":398,"currencyCodeB":980,"date":1682329732,"rateBuy":0,"rateCross":0.0823,"rateSell":0},{"currencyCodeA":418,"currencyCodeB":980,"date":1682220748,"rateBuy":0,"rateCross":0.0021,"rateSell":0},{"currencyCodeA":422,"currencyCodeB":980,"date":1678882171,"rateBuy":0,"rateCross":0.0004,"rateSell":0},{"currencyCodeA":144,"currencyCodeB":980,"date":1682329830,"rateBuy":0,"rateCross":0.1171,"rateSell":0},{"currencyCodeA":434,"currencyCodeB":980,"date":1674670757,"rateBuy":0,"rateCross":7.8783,"rateSell":0},{"currencyCodeA":504,"currencyCodeB":980,"date":1682287518,"rateBuy":0,"rateCross":3.7072,"rateSell":0},{"currencyCodeA":498,"currencyCodeB":980,"date":1682329813,"rateBuy":0,"rateCross":2.0875,"rateSell":0},{"currencyCodeA":969,"currencyCodeB":980,"date":1682183421,"rateBuy":0,"rateCross":0.0085,"rateSell":0},{"currencyCodeA":807,"currencyCodeB":980,"date":1682328466,"rateBuy":0,"rateCross":0.6652,"rateSell":0},{"currencyCodeA":496,"currencyCodeB":980,"date":1681816856,"rateBuy":0,"rateCross":0.0107,"rateSell":0},{"currencyCodeA":478,"currencyCodeB":980,"date":1682114406,"rateBuy":0,"rateCross":0.1076,"rateSell":0},{"currencyCodeA":480,"currencyCodeB":980,"date":1682327917,"rateBuy":0,"rateCross":0.8313,"rateSell":0},{"currencyCodeA":454,"currencyCodeB":980,"date":1678369785,"rateBuy":0,"rateCross":0.0368,"rateSell":0},{"currencyCodeA":484,"currencyCodeB":980,"date":1682329828,"rateBuy":0,"rateCross":2.0837,"rateSell":0},{"currencyCodeA":458,"currencyCodeB":980,"date":1682329744,"rateBuy":0,"rateCross":8.4585,"rateSell":0},{"currencyCodeA":943,"currencyCodeB":980,"date":1682165863,"rateBuy":0,"rateCross":0.5919,"rateSell":0},{"currencyCodeA":516,"currencyCodeB":980,"date":1682328554,"rateBuy":0,"rateCross":2.0793,"rateSell":0},{"currencyCodeA":566,"currencyCodeB":980,"date":1682319399,"rateBuy":0,"rateCross":0.0809,"rateSell":0},{"currencyCodeA":558,"currencyCodeB":980,"date":1682279108,"rateBuy":0,"rateCross":1.0289,"rateSell":0},{"currencyCodeA":578,"currencyCodeB":980,"date":1682329782,"rateBuy":0,"rateCross":3.5606,"rateSell":0},{"currencyCodeA":524,"currencyCodeB":980,"date":1682324529,"rateBuy":0,"rateCross":0.2854,"rateSell":0},{"currencyCodeA":554,"currencyCodeB":980,"date":1682324802,"rateBuy":0,"rateCross":23.1477,"rateSell":0},{"currencyCodeA":512,"currencyCodeB":980,"date":1682322366,"rateBuy":0,"rateCross":97.3454,"rateSell":0},{"currencyCodeA":604,"currencyCodeB":980,"date":1682328363,"rateBuy":0,"rateCross":9.9478,"rateSell":0},{"currencyCodeA":608,"currencyCodeB":980,"date":1682329555,"rateBuy":0,"rateCross":0.6701,"rateSell":0},{"currencyCodeA":586,"currencyCodeB":980,"date":1682329675,"rateBuy":0,"rateCross":0.1322,"rateSell":0},{"currencyCodeA":985,"currencyCodeB":980,"date":1682329833,"rateBuy":0,"rateCross":8.9417,"rateSell":0},{"currencyCodeA":600,"currencyCodeB":980,"date":1682329737,"rateBuy":0,"rateCross":0.0052,"rateSell":0},{"currencyCodeA":634,"currencyCodeB":980,"date":1682329313,"rateBuy":0,"rateCross":10.2851,"rateSell":0},{"currencyCodeA":946,"currencyCodeB":980,"date":1682329828,"rateBuy":0,"rateCross":8.3542,"rateSell":0},{"currencyCodeA":941,"currencyCodeB":980,"date":1682329479,"rateBuy":0,"rateCross":0.3512,"rateSell":0},{"currencyCodeA":682,"currencyCodeB":980,"date":1682316559,"rateBuy":0,"rateCross":9.9799,"rateSell":0},{"currencyCodeA":690,"currencyCodeB":980,"date":1682317180,"rateBuy":0,"rateCross":2.7535,"rateSell":0},{"currencyCodeA":938,"currencyCodeB":980,"date":1680961561,"rateBuy":0,"rateCross":0.0627,"rateSell":0},{"currencyCodeA":752,"currencyCodeB":980,"date":1682329774,"rateBuy":0,"rateCross":3.6406,"rateSell":0},{"currencyCodeA":702,"currencyCodeB":980,"date":1682329762,"rateBuy":0,"rateCross":28.08,"rateSell":0},{"currencyCodeA":694,"currencyCodeB":980,"date":1664217991,"rateBuy":0,"rateCross":0.0024,"rateSell":0},{"currencyCodeA":706,"currencyCodeB":980,"date":1682114406,"rateBuy":0,"rateCross":0.0647,"rateSell":0},{"currencyCodeA":968,"currencyCodeB":980,"date":1680879569,"rateBuy":0,"rateCross":1.0284,"rateSell":0},{"currencyCodeA":760,"currencyCodeB":980,"date":1682114406,"rateBuy":0,"rateCross":0.0056,"rateSell":0},{"currencyCodeA":748,"currencyCodeB":980,"date":1668614714,"rateBuy":0,"rateCross":2.1898,"rateSell":0},{"currencyCodeA":764,"currencyCodeB":980,"date":1682329752,"rateBuy":0,"rateCross":1.0923,"rateSell":0},{"currencyCodeA":972,"currencyCodeB":980,"date":1682328896,"rateBuy":0,"rateCross":3.4303,"rateSell":0},{"currencyCodeA":795,"currencyCodeB":980,"date":1682114406,"rateBuy":0,"rateCross":0.0021,"rateSell":0},{"currencyCodeA":788,"currencyCodeB":980,"date":1682325439,"rateBuy":0,"rateCross":12.318,"rateSell":0},{"currencyCodeA":949,"currencyCodeB":980,"date":1682329811,"rateBuy":0,"rateCross":1.947,"rateSell":0},{"currencyCodeA":901,"currencyCodeB":980,"date":1682329642,"rateBuy":0,"rateCross":1.2226,"rateSell":0},{"currencyCodeA":834,"currencyCodeB":980,"date":1682328844,"rateBuy":0,"rateCross":0.0162,"rateSell":0},{"currencyCodeA":800,"currencyCodeB":980,"date":1682253798,"rateBuy":0,"rateCross":0.01,"rateSell":0},{"currencyCodeA":858,"currencyCodeB":980,"date":1682279349,"rateBuy":0,"rateCross":0.9614,"rateSell":0},{"currencyCodeA":860,"currencyCodeB":980,"date":1682329809,"rateBuy":0,"rateCross":0.0032,"rateSell":0},{"currencyCodeA":937,"currencyCodeB":980,"date":1682114406,"rateBuy":0,"rateCross":1.4873,"rateSell":0},{"currencyCodeA":704,"currencyCodeB":980,"date":1682329718,"rateBuy":0,"rateCross":0.0015,"rateSell":0},{"currencyCodeA":950,"currencyCodeB":980,"date":1682160869,"rateBuy":0,"rateCross":0.0627,"rateSell":0},{"currencyCodeA":952,"currencyCodeB":980,"date":1682181378,"rateBuy":0,"rateCross":0.0624,"rateSell":0},{"currencyCodeA":886,"currencyCodeB":980,"date":1543715495,"rateBuy":0,"rateCross":0.112,"rateSell":0},{"currencyCodeA":710,"currencyCodeB":980,"date":1682328756,"rateBuy":0,"rateCross":2.0808,"rateSell":0},{"currencyCodeA":894,"currencyCodeB":980,"date":1682114406,"rateBuy":0,"rateCross":0.0021,"rateSell":0}];
                let result = nemw;
                result.forEach(item=>{
                    let itemAr = Object.values(item);
                    if(itemAr[1]== UAHNum){
                        let itemCur = itemAr[3];
                        if(itemAr[0]== USDNum){
                            if(itemCur == 0){
                                itemCur = itemAr[4];
                                arr.USD = itemCur.toFixed(2);
                            }
                            else{
                                arr.USD = itemCur.toFixed(2);
                            }
                        }
                        if(itemAr[0]==PLNNum){
                            if(itemCur == 0){
                                itemCur = itemAr[4];
                                arr.PLN = itemCur.toFixed(2);
                            }
                            else{
                                arr.PLN = itemCur.toFixed(2);
                            }
                        }
                        if(itemAr[0]==EURNum){
                            if(itemCur == 0){
                                itemCur = itemAr[4];
                                arr.EUR = itemCur.toFixed(2);
                            }
                            else{
                                arr.EUR = itemCur.toFixed(2);
                            }
                        }
                    }
                })
                insertUSDRate.innerText = arr.USD;
                insertEURRate.innerText = arr.EUR;
                insertPLNRate.innerText = arr.PLN;
            };
            if(valueCurr=='NBP'){
                let resNBP = await fetch('http://api.nbp.pl/api/exchangerates/tables/a/last/5/');
                let data = await resNBP.json();
                let result = await data[4];
                result = Object.values(result);
                result = result[3];
                result.forEach(item => {
                    let itemAr = Object.values(item);
                    let itemNameNum = itemAr[1];
                    let itemCur = itemAr[2];
                    if(itemNameNum == 'UAH'){
                        arr.UAH = itemCur;
                    }
                    if(itemNameNum == 'USD'){
                        arr.USD = itemCur;
                    }
                    if(itemNameNum == 'EUR'){
                        arr.EUR = itemCur;
                    }
                })
                insertUSDRate.innerText = (arr.USD/arr.UAH).toFixed(2)
                insertEURRate.innerText = (arr.EUR/arr.UAH).toFixed(2)
                insertPLNRate.innerText = (1/arr.UAH).toFixed(2)
            };
            if(valueCurr=='NBU'){
                let resNBU = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
                let data = await resNBU.json();
                let result = await data;
                result.forEach(item => {
                    let itemAr = Object.values(item);
                    let itemNameNum = itemAr[0];
                    let itemCur = itemAr[2];
                    if(itemNameNum == USDNum){
                        arr.USD = itemCur.toFixed(2);
                    }
                    if(itemNameNum == EURNum){
                        arr.EUR = itemCur.toFixed(2);
                    }
                    if(itemNameNum == PLNNum){
                        arr.PLN = itemCur.toFixed(2);
                    }
                })
                insertUSDRate.innerText = arr.USD;
                insertEURRate.innerText = arr.EUR;
                insertPLNRate.innerText = arr.PLN;  
            };
        }
        //  EXECUTION OF FUNCTIONs
        CurrencySelectRate();
        currencyChageRate.addEventListener('change', CurrencySelectRate);

    // ________________ TIME
        // VARIABLEs
        let timeValue = document.querySelector('.timeValue');
        // FUNCTIONS
        function getDate(){
            let currentDate = new Date();
            let day = currentDate.getDay();
                if(day<10){
                    day='0'+day;
                }
            let month = currentDate.getMonth();
                if(month<10){
                    month='0'+month;
                }
            let year = currentDate.getFullYear();
                if(year<10){
                    year='0'+year;
                }
            let hour = currentDate.getHours();
                if(hour<10){
                    hour='0'+hour;
                }
            let minutes = currentDate.getMinutes();
                if(minutes<10){
                    minutes='0'+minutes;
                }
            let seconds = currentDate.getSeconds();
                if(seconds<10){
                    seconds='0'+seconds;
                }
            let Now = day+"."+month+ "."+year+"  "+hour+":"+minutes+":"+seconds;
            timeValue.innerText = Now
        }
        // EXECUTION OF FUNCTIONs
        setInterval(getDate, 1000);
}
rateSectionFunc();

// ________________________________ CALCULATOR ________________________________ \\
function calculatorFunc(){
    // ITEM
    let addNewItemBtn = document.querySelector('.addNewItem');
    function addNewItemFunc(){
        // ITEM
            // ADD ITEM
            let parent = this.closest('.inputCalc').querySelector('.contantItems');
            let newItem = document.createElement('div');
            newItem.classList.add('itemInputBlock');
            newItem.innerHTML = `
            <div class="titlItem">
                <div class="text">
                    <input type="text" placeholder="Name of your">
                    <button class="editTitle"><i class="fa-regular fa-pen-to-square"></i></button>
                </div>
                <div class="price">
                    <p>UAH <span class="priceTotalItem">0.00</span></p>
                    <button class="openItem"><i class="fa-solid fa-chevron-up"></i></button>
                </div>
            </div>
            <div class="contentInput">
                <hr>
                <div class="inputsSec">
                    <div class="categoryItem">
                        <div class="titleCategoryItem">
                            <h5>Value</h5>
                            <div class="priceCategoryItem">
                                <p><span class="cur">UAH</span> <span class="numb">0.00</span></p>
                                <button class="openCategory"><!--<i class="fa-solid fa-chevron-up">--></i></button>
                            </div>
                        </div>
                        <div class="contentCat">
                            <hr>
                            <div class="editCategory">
                                <div class="left">
                                    <div class="blockEdit">
                                        <p>Name:</p>
                                        <div class="input">
                                            <input type="text" placeholder="Enter name" class="btneditname">
                                            <button class="editName btneditname"><i class="fa-regular fa-pen-to-square"></i></button>
                                        </div>
                                    </div>
                                    <div class="remove">
                                        <!-- <button class="removeBtn">Remove Category</button> -->
                                    </div>
                                </div>
                                <div class="right">
                                    <div class="blockEdit">
                                        <p>Currency:</p>
                                        <select name="" id="" class="selectCur">
                                            <option value="UAH">UAH</option>
                                            <option value="USD">USD</option>
                                            <option value="PLN">PLN</option>
                                            <option value="EUR">EUR</option>
                                        </select>
                                    </div>
                                    <div class="blockEdit">
                                        <p>Price:</p>
                                        <div class="input">
                                            <input type="number" placeholder="Enter value" class="btneditprice editCat">
                                            <button class="editPrice btneditprice"><i class="fa-regular fa-pen-to-square"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="addNewCategory">Add new<span><i class="fa-solid fa-plus"></i></span></button>
                <button class="removeItem">Remove<span><i class="fa-solid fa-trash"></i></span></button>
            </div>
            `
            parent.appendChild(newItem)
            
            // REMOVE ITEM
            let removeItemBtn = document.querySelectorAll('.removeItem');
            function removeItemFunc(item){
                item.addEventListener('click',function(){
                    this.closest('.itemInputBlock').remove();
                })
            }
            removeItemBtn.forEach(item=>removeItemFunc(item));
            categoryFunc();
    }
    addNewItemBtn.addEventListener('click', addNewItemFunc);

    // CATEGORY
    let addNewCategoryBtn = document.querySelectorAll('.addNewCategory');
    function categoryFunc() {
        addNewCategoryBtn = document.querySelectorAll('.addNewCategory');
        addNewCategoryBtn.forEach(item => {
            item.removeEventListener('click', addCatFun);
            item.addEventListener('click', addCatFun);
        });
    }
    function addCatFun(){
        let parentCat = this.closest('.contentInput').querySelector('.inputsSec');
        let newCat = document.createElement('div');
        newCat.classList.add('categoryItem');
        newCat.innerHTML =`
        <div class="titleCategoryItem">
            <h5>Value</h5>
            <div class="priceCategoryItem">
                <p><span class="cur">UAH</span> <span class="numb">0.00</span></p>
                <button class="openCategory"><!--<i class="fa-solid fa-chevron-up">--></i></button>
            </div>
        </div>
        <div class="contentCat">
            <hr>
            <div class="editCategory">
                <div class="left">
                    <div class="blockEdit">
                        <p>Name:</p>
                        <div class="input">
                            <input type="text" placeholder="Enter name" class="btneditname">
                            <button class="editName btneditname"><i class="fa-regular fa-pen-to-square"></i></button>
                        </div>
                    </div>
                    <div class="remove">
                        <button class="removeBtn">Remove Category</button>
                    </div>
                </div>
                <div class="right">
                    <div class="blockEdit">
                        <p>Currency:</p>
                        <select name="" id="" class="selectCur">
                            <option value="UAH">UAH</option>
                            <option value="USD">USD</option>
                            <option value="PLN">PLN</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                    <div class="blockEdit">
                        <p>Price:</p>
                        <div class="input">
                            <input type="number" placeholder="Enter value" class="btneditprice editCat">
                            <button class="editPrice btneditprice"><i class="fa-regular fa-pen-to-square"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        parentCat.appendChild(newCat);
        let removeCatBtn = document.querySelectorAll('.removeBtn');
        function removeCatFunc(item){
            item.addEventListener('click',function(){
                this.closest('.categoryItem').remove();
            })
        }
        removeCatBtn.forEach(item=>removeCatFunc(item));
    }
    categoryFunc();
}
calculatorFunc();
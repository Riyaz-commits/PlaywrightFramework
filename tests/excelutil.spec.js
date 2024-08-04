const Exceljs = require ('exceljs')
const {test, expect} =require('@playwright/test');

async function writeExcelTest(searchText,replaceText,change, filePath){
const workbook = new Exceljs.Workbook();
await workbook.xlsx.readFile(filePath)
// .then(function(){ we can either un commnet this or we can add await before workbook readfile

const   worksheet =workbook.getWorksheet('Sheet1')

const output = await readExcel(worksheet,searchText)

  const cell =  await worksheet.getCell(output.rNum,output.cNum+change.colChange);

  //+2 becuase for apple i wantef to change the price 
  cell.value = replaceText,
  await workbook.xlsx.writeFile(filePath)

}


async function readExcel(worksheet, searchText)
{
    let outPut = {rNum:-1 , cNum:-1};

    worksheet.eachRow((rows,rowNumber) => 
        {
            rows.eachCell((cell, columnNumber) =>
            {
               if(cell.value === searchText)
               {
                outPut.rNum=rowNumber;
                outPut.cNum=columnNumber;
                console.log("Row Number is "+rowNumber+" Column value is "+columnNumber);
               }
            })
        })

        return outPut;
    
}

// to replace the name of the fruit | writeExcelTest("dragon fruit","Apple fruit","c:/Users/RIYAZ BASHA SHAIK/OneDrive/Documents/JSPRACEXCEL.xlsx");

//writeExcelTest("dragon fruit",499,{rowChange:0,colChange:2},"c:/Users/RIYAZ BASHA SHAIK/OneDrive/Documents/JSPRACEXCEL.xlsx");


test.skip('@API  Excel data fetching automation case', async ({page})=>
{

    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");

    await expect(page).toHaveTitle("RS Web Table Automation Page");
    const downloadpromise = page.waitForEvent('download');
    await page.getByRole('button',{name: 'Download'}).click();
 //   await page.locator("#downloadButton").click();
    await downloadpromise;

  // await  writeExcelTest("dragon fruit",499,{rowChange:0,colChange:2},"C:/Users/RIYAZ BASHA SHAIK/Downloads/download");
   //await page.pause();

})
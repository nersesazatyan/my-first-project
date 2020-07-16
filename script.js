async function foo(){
    const resp = await fetch('http://www.cbr-xml-daily.ru/daily_json.js')
    const data = await resp.json();
    console.log(data)
}
foo();
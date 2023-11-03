export function CurrentDate() {
    const date = new Date();
    let dd = date.getDate().toString();
    let mm = (date.getMonth() + 1).toString();
    let yyyy = date.getFullYear().toString();

    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let weekday = week[new Date().getDay()];
    if (parseInt(dd) < 10) {
        dd = '0' + dd;
      }
      if (parseInt(mm) < 10) {
        mm = '0' + mm;
      }
    const formattedDate = dd + '/' + mm + '/' + yyyy;
    return (
        <>
        {weekday},<br/>
        {formattedDate}
        </>
    )
  }
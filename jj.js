

let obj={
    country:"DZ",
    city:"Alger"
}
let obj2={
  country:"SA",
  city:"Makkah al Mukarramah"
}
 // axios decomentation
axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params: obj // params{country:"DZ",  city:"Alger"
  })
  .then(function (response) {
     const temps= response.data.data.timings;
     document.getElementById("fajer").innerHTML= temps.Fajr;
     document.getElementById("duhr").innerHTML =temps.Dhuhr;
     document.getElementById("aser").innerHTML =temps.Asr;
      document.getElementById("marg").innerHTML =temps.Maghrib;
      document.getElementById("isha").innerHTML =temps.Isha;
      document.getElementById("ich").innerHTM =temps.Sunrise;

        const day=response.data.data.date.readable;
        const week=response.data.data.date.hijri.weekday.ar ;
       const  ddd= day +" "+ week ;

 document.getElementById("date").innerHTML=ddd;
    console.log( day +" "+ week );
    
  })
  .catch(function (error) {
    console.log(error);
  })


  axios.get('http://api.aladhan.com/v1/timingsByCity',{

    params:obj2

  })

  .then(function (response) {
    const temps2=response.data.data.timings;
    document.getElementById("fajerm").innerHTML=temps2.Fajr;
    document.getElementById("duhrm").innerHTML=temps2.Dhuhr;

    document.getElementById("aserm").innerHTML=temps2.Asr;
    document.getElementById("margm").innerHTML=temps2.Maghrib;
    document.getElementById("isham").innerHTML =temps2.Isha;
    document.getElementById("ichk").innerHTM =temps2.Sunrise;

    console.log(response.data.data.timings);
  })




  axios.get('http://api.aladhan.com/v1/timingsByCity',{

    params:obj2

  })

  .then(function (response) {
    const temps2=response.data.data.timings;
    document.getElementById("fajerm").innerHTML=temps2.Fajr;
    document.getElementById("duhrm").innerHTML=temps2.Dhuhr;

    document.getElementById("aserm").innerHTML=temps2.Asr;
    document.getElementById("margm").innerHTML=temps2.Maghrib;
    document.getElementById("isham").innerHTML =temps2.Isha;
    document.getElementById("ichk").innerHTM =temps2.Sunrise;

    console.log(response.data.data.timings);
  })




  .catch(function (error) {
    
    console.log(error);
  })
 
let obj3={
  country:"PS",
  city:"Al Quds"
}



  axios.get('http://api.aladhan.com/v1/timingsByCity',{

    params:obj3

  })

  .then(function (response) {
    const temps3=response.data.data.timings;
    document.getElementById("fajerq").innerHTML=temps3.Fajr;
    document.getElementById("duhrq").innerHTML=temps3.Dhuhr;

    document.getElementById("aserq").innerHTML=temps3.Asr;
    document.getElementById("margq").innerHTML=temps3.Maghrib;
    document.getElementById("ishaq").innerHTML =temps3.Isha;
    document.getElementById("pin").innerHTM =temps3.Sunrise;

    console.log(response.data.data.timings);
  })




  .catch(function (error) {
    
    console.log(error);
  })
 
//lengthConvert

function  show () {
   let Selector1 = document.getElementById('from').value;
   let Selector2 = document.getElementById('to').value;
   let userValue = parseInt(document.getElementById('UV').value);
   
   if (userValue !=NaN && (userValue >= 0)) {
      document.getElementById('error').innerHTML = '';

   if (Selector1 == 'meter' && Selector2 == 'kilometer') {
      let km = meter2km(userValue); 
      
      document.getElementById('answer').value = km;
      
   }

   else if (Selector1 == 'meter' && Selector2 == 'centimeter') {
      let cm = meter2cm(userValue);

      document.getElementById('answer').value = cm;
   }

   else if (Selector1 == 'meter' && Selector2 == 'millimeter') {
      let mlm = meter2millimeter(userValue);

      document.getElementById('answer').value = mlm;
   }
   
   else if (Selector1 == 'meter' && Selector2 == 'micrometer') {
      let mcm = meter2micrometer(userValue);

      document.getElementById('answer').value = mcm;
   }

   else if (Selector1 == 'meter' && Selector2 == 'nanometer') {
      let m2nm = meter2nanometer(userValue);

      document.getElementById('answer').value = m2nm;
   }

   else if (Selector1 == 'meter' && Selector2 == 'mile') {
      let m2mile = meter2mile(userValue);

      document.getElementById('answer').value = m2mile;
   }

   else if (Selector1 == 'meter' && Selector2 == 'yard') {
      let m2yd = meter2yard(userValue);

      document.getElementById('answer').value = m2yd;
   }

   else if (Selector1 == 'meter' && Selector2 == 'foot') {
      let m2ft = meter2foot(userValue);

      document.getElementById('answer').value = m2ft;
   }

   else if (Selector1 == 'meter' && Selector2 == 'inch') {
      let m2inch = meter2inch(userValue);

      document.getElementById('answer'). value = m2inch;
   }
  
   else if (Selector1 == 'meter' && Selector2 == 'lightyear') {
      let m2ly = meter2lightyear(userValue);

      document.getElementById('answer').value = m2ly;
   }

   else if (Selector1 == 'meter' && Selector2 == 'meter') {
      let m2m = meter2meter(userValue);

      document.getElementById('answer').value = m2m;
   } 

   else if (Selector1 == 'kilometer' && Selector2 == 'meter') {
      let km2m = km2meter(userValue);

      document.getElementById('answer').value = km2m;
   }

   else if (Selector1 == 'kilometer' && Selector2 == 'kilometer') {
      let km2km = km2kmeter(userValue);

      document.getElementById('answer').value = km2km;
   }

   else if (Selector1 == 'kilometer' && Selector2 == 'centimeter') {
      let km2cm = kilometer2centimeter(userValue);

      document.getElementById('answer').value = km2cm;
   }

   else if (Selector1 == 'kilometer' && Selector2 == 'millimeter') {
      let km2mlm = kilometer2millimeter(userValue);

      document.getElementById('answer').value = km2mlm;
   } 

   else if (Selector1 == 'kilometer' && Selector2 == 'micrometer') {
      let km2mcm = kilometer2micrometer(userValue);

      document.getElementById('answer').value = km2mcm;
   }

   else if (Selector1 == 'kilometer' && Selector2 == 'nanometer') {
      let km2nanom = kilometer2nanometer(userValue);

      document.getElementById('answer').value = km2nanom;
   }

   else if (Selector1 == 'kilometer' && Selector2 == 'mile') {
      let km2mile = kilometer2mile(userValue);

      document.getElementById('answer').value = km2mile;
   }

   else if (Selector1 == 'kilometer' && Selector2 == 'yard' ) {
      let km2yd = kilometer2yard(userValue);

      document.getElementById('answer').value = km2yd
   }

   else if (Selector1 == 'kilometer' && Selector2 == 'foot') {
      let km2ft = kilometer2foot(userValue);

      document.getElementById('answer').value = km2ft
   }

   else if (Selector1 == 'kilometer' && Selector2 == 'inch') {
      let km2inch = kilometer2inch(userValue);

      document.getElementById('answer').value = km2inch;
   }

   else if (Selector1 == 'kilometer' && Selector2 == 'lightyear') {
      let km2ly = kilometer2lightyear(userValue);

      document.getElementById('answer').value = km2ly
   }

   else if (Selector1 == 'centimeter' && Selector2 == 'centimeter') {
      let cm2cm = cm2centimter(userValue);

      document.getElementById('answer').value = cm2cm;
   }

   else if (Selector1 == 'centimeter' && Selector2 == 'meter') {
      let cm2m = centimeter2meter(userValue);

      document.getElementById('answer').value = cm2m;
   }

   else if (Selector1 == 'centimeter' && Selector2 == 'kilometer') {
      let cm2km = centimeter2kilometer(userValue);

      document.getElementById('answer').value = cm2km;
   }

   else if (Selector1 == 'centimeter' && Selector2 == 'millimeter' ) {
      let cm2mlm = centimeter2millimeter(userValue);

      document.getElementById('answer').value = cm2mlm;
   }

   else if (Selector1 == 'centimeter' && Selector2 == 'micrometer') {
   let cm2mcm = cm2micrometer(userValue);

   document.getElementById('answer').value = cm2mcm;
   }

   else if (Selector1 == 'centimeter' && Selector2 == 'nanometer') {
      let cm2nm = centimeter2nanometer(userValue);

      document.getElementById('answer').value = cm2nm;
   }

   else if (Selector1 == 'centimeter' && Selector2 == 'mile') {
      let cm2mile = centimeter2mile(userValue);

      document.getElementById('answer').value = cm2mile;
   }

   else if (Selector1 == 'centimeter' && Selector2 == 'yard') {
      let cm2yd = centimeter2yard(userValue);

      document.getElementById('answer').value = cm2yd;
   }

   else if (Selector1 == 'centimeter' && Selector2 == 'foot') {
      let cm2ft = centimeter2foot(userValue);

      document.getElementById('answer').value = cm2ft;
   }

   else if (Selector1 == 'centimeter' && Selector2 == 'inch') {
      let cm2inch = centimeter2inch(userValue);

      document.getElementById('answer').value = cm2inch;
   }

   else if (Selector1 == 'centimeter' && Selector2 == 'lightyear') {
      let cm2ly = centimeter2lightyear(userValue);

      document.getElementById('answer').value = cm2ly;
   }

   else if (Selector1 == 'millimeter' && Selector2 == 'millimeter') {
      let mlm2mlm = mlm2millimeter(userValue);

      document.getElementById('answer').value = mlm2mlm;
   }

   else if (Selector1 == 'millimeter' && Selector2 == 'meter') {
      let mlm2meter = millimeter2meter(userValue);

      document.getElementById('answer').value = mlm2meter;
   }

   else if (Selector1 == 'millimeter' && Selector2 == 'kilometer') {
      let mlm2km = millimeter2kilometer(userValue);

      document.getElementById('answer').value = mlm2km;
   }

   else if (Selector1 == 'millimeter' && Selector2 == 'centimeter') {
      let mlm2cm = millimeter2centimeter(userValue);

      document.getElementById('answer').value = mlm2cm;
   }

   else if (Selector1 == 'millimeter' && Selector2 == 'micrometer') {
      let mlm2mcm = millimeter2micrometer(userValue);

      document.getElementById('answer').value = mlm2mcm;
   }

   else if (Selector1 == 'millimeter' && Selector2 == 'nanometer') {
      let mlm2nanom = millimeter2nanometer(userValue);

      document.getElementById('answer').value = mlm2nanom;
   }

   else if (Selector1 == 'millimeter' && Selector2 == 'mile') {
      let mlm2mile = millimeter2mile(userValue);

      document.getElementById('answer').value = mlm2mile;
   }

   else if (Selector1 == 'millimeter' && Selector2 == 'yard') {
      let mlm2yd = millimeter2yard(userValue);

      document.getElementById('answer').value = mlm2yd;
   }

   else if (Selector1 == 'millimeter' && Selector2 == 'foot') {
      let mlm2ft = millimeter2foot(userValue);

      document.getElementById('answer').value = mlm2ft;
   }

   else if (Selector1 == 'millimeter' && Selector2 == 'inch') {
      let mlm2inch = millimeter2inch(userValue);

      document.getElementById('answer').value = mlm2inch;
   }

   else if (Selector1 == 'millimeter' && Selector2 == 'lightyear') {
      let mlm2ly = millimeter2lightyear(userValue);

      document.getElementById('answer').value = mlm2ly;
   }

   else if (Selector1 == 'micrometer' && Selector2 == 'micrometer') {
      let mcm2mcm = mcm2micrometer(userValue);

      document.getElementById('answer').value = mcm2mcm;
   }

   else if (Selector1 == 'micrometer' && Selector2 == 'meter') {
      let mcm2meter = micrometer2meter(userValue);

      document.getElementById('answer').value = mcm2meter;
   }

   else if (Selector1 == 'micrometer' && Selector2 == 'kilometer') {
      let mcm2km = micrometer2kilometer(userValue);

      document.getElementById('answer').value = mcm2km;
   }

   else if (Selector1 == 'micrometer' && Selector2 == 'centimeter') {
      let mcm2cm = micrometer2centimeter(userValue);

      document.getElementById('answer').value = mcm2cm;
   }

   else if (Selector1 == 'micrometer' && Selector2 == 'millimeter') {
      let mcm2mlm = micrometer2millimeter(userValue);

      document.getElementById('answer').value = mcm2mlm;
   }

   else if (Selector1 == 'micrometer' && Selector2 == 'nanometer') {
      let mcm2nm = micrometer2nanometer(userValue);

      document.getElementById('answer').value = mcm2nm;
   }

   else if (Selector1 == 'micrometer' && Selector2 == 'mile') {
      let mcm2miile = micrometer2mile(userValue);

      document.getElementById('answer').value = mcm2miile;
   }

   else if (Selector1 == 'micrometer' && Selector2 == 'yard') {
      let mcm2yd = micrometer2yard(userValue);

      document.getElementById('answer').value = mcm2yd;
   }

   else if (Selector1 == 'micrometer' && Selector2 == 'foot') {
      let mcm2ft = micrometer2foot(userValue);

      document.getElementById('answer').value = mcm2ft;
   }

   else if (Selector1 == 'micrometer' && Selector2 == 'inch') {
      let mcm2inch = micrometer2inch(userValue);

      document.getElementById('answer').value = mcm2inch;
   }

   else if (Selector1 == 'micrometer' && Selector2 == 'lightyear') {
      let mcm2ly = micrometer2lightyear(userValue);

      document.getElementById('answer').value = mcm2ly;
   }

   else if (Selector1 == 'nanometer' && Selector2 == 'nanometer') {
      let nm2nm = nm2nanometer(userValue);

      document.getElementById('answer').value = nm2nm;
   }

   else if (Selector1 == 'nanometer' && Selector2 == 'meter') {
      let nm2meter = nanometer2meter(userValue);

      document.getElementById('answer').value = nm2meter;
   }

   else if (Selector1 == 'nanometer' && Selector2 == 'kilometer') {
      let nm2km = nanometer2kilometer(userValue);

      document.getElementById('answer').value = nm2km;
   }

   else if (Selector1 == 'nanometer' && Selector2 == 'centimeter') {
      let nm2cm = nanometertocentimeter(userValue);

      document.getElementById('answer').value = nm2cm;
   }

   else if (Selector1 == 'nanometer' && Selector2 == 'millimeter') {
      let nm2mlm = nanometer2millimeter(userValue);

      document.getElementById('answer').value = nm2mlm;
   }

   else if (Selector1 == 'nanometer' && Selector2 == 'micrometer') {
      let nm2mcm = nanometer2micrometer(userValue);

      document.getElementById('answer').value = nm2mcm;
   }

   else if (Selector1 == 'nanometer' && Selector2 == 'mile') {
      let nm2mile = nanometer2mile(userValue);

      document.getElementById('answer').value = nm2mile;
   }

   else if (Selector1 == 'nanometer' && Selector2 == 'yard') {
      let nm2yd = nanometer2yard(userValue);

      document.getElementById('answer').value = nm2yd;
   }

   else if (Selector1 == 'nanometer' && Selector2 == 'foot') {
      let nm2ft = nanometer2foot(userValue);

      document.getElementById('answer').value = nm2ft;
   }

   else if (Selector1 == 'nanometer' && Selector2 == 'inch') {
      let nm2inch = nanometer2inch(userValue);

      document.getElementById('answer').value = nm2inch;
   }

   else if (Selector1 == 'nanometer' && Selector2 == 'lightyear') {
      let nm2ly = nanometer2lightyear(userValue);

      document.getElementById('answer').value = nm2ly;
   }

   else if (Selector1 == 'mile' && Selector2 == 'mile') {
      let ml2ml = ml2mile(userValue);

      document.getElementById('answer').value = ml2ml;
   }

   else if (Selector1 == 'mile' && Selector2 == 'meter') {
      let ml2meter = mile2meter(userValue);

      document.getElementById('answer').value = ml2meter;
   }

   else if (Selector1 == 'mile' && Selector2 == 'kilometer') {
      let ml2km = mile2kilometer(userValue);

      document.getElementById('answer').value = ml2km;
   }

   else if (Selector1 == 'mile' && Selector2 == 'centimeter') {
      let ml2cm = mile2centimeter(userValue);

      document.getElementById('answer').value = ml2cm;
   }

   else if (Selector1 == 'mile' && Selector2 == 'millimeter') {
      let ml2mlm = mile2millimeter(userValue);

      document.getElementById('answer').value = ml2mlm;
   }

   else if (Selector1 == 'mile' && Selector2 == 'micrometer') {
      let ml2mcm = mile2micrometer(userValue);

      document.getElementById('answer').value = ml2mcm;
   }

   else if (Selector1 == 'mile' && Selector2 == 'nanometer') {
      let ml2nm = mile2nanometer(userValue);

      document.getElementById('answer').value = ml2nm;
   }

   else if (Selector1 == 'mile' && Selector2 == 'yard') {
      let ml2yd = mile2yard(userValue);

      document.getElementById('answer').value = ml2yd;
   }

   else if (Selector1 == 'mile' && Selector2 == 'foot') {
      let ml2ft = mile2foot(userValue);

      document.getElementById('answer').value = ml2ft;
   }

   else if (Selector1 == 'mile' && Selector2 == 'inch') {
      let ml2inch = mile2inch(userValue);

      document.getElementById('answer').value = ml2inch;
   }

   else if (Selector1 == 'mile' && Selector2 == 'lightyear') {
      let ml2ly = mile2lightyear(userValue);

      document.getElementById('answer').value = ml2ly;
   }

   else if (Selector1 == 'yard' && Selector2 == 'yard') {
      let yd2yd = yd2yard(userValue);

      document.getElementById('answer').value = yd2yd;
   }

   else if (Selector1 == 'yard' && Selector2 == 'meter') {
      let yd2meter = yard2meter(userValue);

      document.getElementById('answer').value = yd2meter;
   }

   else if (Selector1 == 'yard' && Selector2 == 'kilometer') {
      let yd2km = yard2kilometer(userValue);

      document.getElementById('answer').value = yd2km;
   }

   else if (Selector1 == 'yard' && Selector2 == 'centimeter') {
      let yd2cm = yard2centimeter(userValue);

      document.getElementById('answer').value = yd2cm;
   }

   else if (Selector1 == 'yard' && Selector2 == 'millimeter') {
      let yd2mlm = yard2millimeter(userValue);

      document.getElementById('answer').value = yd2mlm;
   }

   else if (Selector1 == 'yard' && Selector2 == 'micrometer') {
      let yd2mcm = yard2micrometer(userValue);

      document.getElementById('answer').value = yd2mcm;
   }

   else if (Selector1 == 'yard' && Selector2 == 'nanometer') {
      let yd2nm = yard2nanometer(userValue);

      document.getElementById('answer').value = yd2nm;
   }

   else if (Selector1 == 'yard' && Selector2 == 'mile') {
      let yd2ml = yard2mile(userValue);

      document.getElementById('answer').value = yd2ml;
   }

   else if (Selector1 == 'yard' && Selector2 == 'foot') {
      let yd2ft = yard2foot(userValue);

      document.getElementById('answer').value = yd2ft;
   }

   else if (Selector1 == 'yard' && Selector2 == 'inch') {
      let yd2inch = yard2inch(userValue);

      document.getElementById('answer').value = yd2inch;
   }

   else if (Selector1 == 'yard' && Selector2 == 'lightyear') {
      let yd2ly = yard2lightyear(userValue);

      document.getElementById('answer').value = yd2ly;
   }

   else if (Selector1 == 'foot' && Selector2 == 'foot') {
      let ft2ft = ft2foot(userValue);

      document.getElementById('answer').value = ft2ft;
   }

   else if (Selector1 == 'foot' && Selector2 == 'meter') {
      let ft2meter = foot2meter(userValue);

      document.getElementById('answer').value = ft2meter;
   }

   else if (Selector1 == 'foot' && Selector2 == 'kilometer') {
      let ft2km = foot2kilometer(userValue);

      document.getElementById('answer').value = ft2km;
   }

   else if (Selector1 == 'foot' && Selector2 == 'centimeter') {
      let ft2cm = foot2centimeter(userValue);

      document.getElementById('answer').value = ft2cm;
   }

   else if (Selector1 == 'foot' && Selector2 == 'millimeter') {
      let ft2mlm = foot2millimeter(userValue);

      document.getElementById('answer').value = ft2mlm;
   }

   else if (Selector1 == 'foot' && Selector2 == 'micrometer') {
      let ft2mcm = foot2micrometer(userValue);

      document.getElementById('answer').value = ft2mcm;
   }

   else if (Selector1 == 'foot' && Selector2 == 'nanometer') {
      let ft2nm = foot2nanometer(userValue);

      document.getElementById('answer').value = ft2nm;
   }

   else if (Selector1 == 'foot' && Selector2 == 'mile') {
      let ft2mile = foot2mile(userValue);

      document.getElementById('answer').value = ft2mile;
   }

   else if (Selector1 == 'foot' && Selector2 == 'yard') {
      let ft2yd = foot2yard(userValue);

      document.getElementById('answer').value = ft2yd;
   }

   else if (Selector1 == 'foot' && Selector2 == 'inch') {
      let ft2inch = foot2inch(userValue);

      document.getElementById('answer').value = ft2inch;
   }

   else if (Selector1 == 'foot' && Selector2 == 'lightyear') {
      let ft2ly = foot2lightyear(userValue);

      document.getElementById('answer').value = ft2ly;
   }

   else if (Selector1 == 'inch' && Selector2 == 'inch') {
      let in2inch = inch2inch(userValue);

      document.getElementById('answer').value = in2inch;
   }

   else if (Selector1 == 'inch' && Selector2 == 'meter') {
      let in2meter = inch2meter(userValue);

      document.getElementById('answer').value = in2meter;
   }

   else if (Selector1 == 'inch' && Selector2 == 'kilometer') {
      let inch2km = inch2kilometer(userValue);

      document.getElementById('answer').value = inch2km;
   }

   else if (Selector1 == 'inch' && Selector2 == 'centimeter') {
      let inch2cm = inch2centimeter(userValue);

      document.getElementById('answer').value = inch2cm;
   }

   else if (Selector1 == 'inch' && Selector2 == 'millimeter') {
      let inch2mlm = inch2millimeter(userValue);

      document.getElementById('answer').value = inch2mlm;
   }

   else if (Selector1 == 'inch' && Selector2 == 'micrometer') {
      let inch2mcm = inch2micrometer(userValue);

      document.getElementById('answer').value = inch2mcm;
   }

   else if (Selector1 == 'inch' && Selector2 == 'nanometer') {
      let inch2nm = inch2nanometer(userValue);

      document.getElementById('answer').value = inch2nm;
   }

   else if (Selector1 == 'inch' && Selector2 == 'mile') {
      let inch2ml = inch2mile(userValue);

      document.getElementById('answer').value = inch2ml;
   }

   else if (Selector1 == 'inch' && Selector2 == 'yard') {
      let inch2yd = inch2yard(userValue);

      document.getElementById('answer').value = inch2yd;

   }
    
   else if (Selector1 == 'inch' && Selector2 == 'foot') {
      let inch2ft = inch2foot(userValue);
 
      document.getElementById('answer').value = inch2ft;
   }

   else if (Selector1 == 'inch' && Selector2 == 'lightyear') {
      let inch2ly = inch2lightyear(userValue);

      document.getElementById('answer').value = inch2ly;
   }

   else if (Selector1 == 'lightyear' && Selector2 == 'lightyear') {
      let ly2ly = lightyear2lightyear(userValue);

      document.getElementById('answer').value = ly2ly;
   }

   else if (Selector1 == 'lightyear' && Selector2 == 'meter') {
      let ly2meter = lightyear2meter(userValue);

      document.getElementById('answer').value = ly2meter;
   }

   else if (Selector1 == 'lightyear' && Selector2 == 'kilometer') {
      let ly2km = lightyear2kilometer(userValue);

      document.getElementById('answer').value = ly2km;
   }

   else if (Selector1 == 'lightyear' && Selector2 == 'centimeter') {
      let ly2cm = lightyear2centimeter(userValue);

      document.getElementById('answer').value = ly2cm;
   }

   else if (Selector1 == 'lightyear' && Selector2 == 'millimeter') {
      let ly2mlm = lightyear2millimeter(userValue);

      document.getElementById('answer').value = ly2mlm;
   }

   else if (Selector1 == 'lightyear' && Selector2 == 'micrometer') {
      let ly2mcm = lightyear2micrometer(userValue);

      document.getElementById('answer').value = ly2mcm;
   }

   else if (Selector1 == 'lightyear' && Selector2 == 'nanometer') {
      let ly2nm = lightyear2nanometer(userValue);

      document.getElementById('answer').value = ly2nm;
   }

   else if (Selector1 == 'lightyear' && Selector2 == 'mile') {
      let ly2ml = lightyear2mile(userValue);

      document.getElementById('answer').value = ly2ml;
   }

   else if (Selector1 == 'lightyear' && Selector2 == 'yard') {
      let ly2yd = lightyear2yard(userValue);

      document.getElementById('answer').value = ly2yd;
   }

   else if (Selector1 == 'lightyear' && Selector2 == 'foot') {
      let ly2ft = lightyear2foot(userValue);

      document.getElementById('answer').value = ly2ft;
   } 

   else if (Selector1 == 'lightyear' && Selector2 == 'inch') {
      let ly2inch = lightyear2inch(userValue);

      document.getElementById('answer').value = ly2inch;
   }  
   
} else {
   error.innerText = 'Please provide a valid number!';
   document.getElementById('answer').value = '';
}
}

//lengthResetfunction

function resetlength () {
   document.getElementById('UV').value = '';
   document.getElementById('answer').value = '';
   document.getElementById('error').innerHTML = '';
   
}


//temperatureConvert

function temperature () {
   let tempSelect1 = document.getElementById('temp1').value;
   let tempSelect2 = document.getElementById('temp2').value;
   let tempValue = parseInt(document.getElementById('tv').value);
   console.log(tempValue);

   if ((tempValue !=NaN) && ((tempValue>=0)||(tempValue<0))) {
      document.getElementById('error').innerText = ''
   if (tempSelect1 == 'celsius' && tempSelect2 == 'kelvin' ) {
      let c2k = celsius2kelvin(tempValue);

      document.getElementById('tempout').value = c2k;
   }

   else if (tempSelect1 == 'celsius' && tempSelect2 == 'celsius') {
      let c2c = celsius2celsius(tempValue);

      document.getElementById('tempout').value = c2c;
   }

   else if (tempSelect1 == 'celsius' && tempSelect2 == 'fahrenheit') {
      let c2f = celsius2fahrenheit(tempValue);

      document.getElementById('tempout').value = c2f;
   }

   else if (tempSelect1 == 'kelvin' && tempSelect2 == 'kelvin') {
      let k2k = kelvin2kelvin(tempValue);

      document.getElementById('tempout').value = k2k;
   }

   else if (tempSelect1 == 'kelvin' && tempSelect2 == 'celsius') {
      let k2c = kelvin2celsius(tempValue);

      document.getElementById('tempout').value = k2c;
   }

   else if (tempSelect1 == 'kelvin' && tempSelect2 == 'fahrenheit') {
      let k2f = kelvin2fahrenheit(tempValue);

      document.getElementById('tempout').value = k2f;
   }

   else if (tempSelect1 == 'fahrenheit' && tempSelect2 == 'fahrenheit') {
      let f2f = fahrenheit2fahrenheit(tempValue);

      document.getElementById('tempout').value = f2f;
   }

   else if (tempSelect1 == 'fahrenheit' && tempSelect2 == 'celsius') {
      let f2c = fahrenheit2celsius(tempValue);

      document.getElementById('tempout').value = f2c;
   }

   else if (tempSelect1 == 'fahrenheit' && tempSelect2 == 'kelvin') {
      let f2k = fahrenheit2kelvin(tempValue);

      document.getElementById('tempout').value = f2k;
   }
} 

else {
   console.log(tempValue);
   error.innerText = 'Please provide a valid number!'
   document.getElementById('tempout').value = '';
   
}
}

//resetTemperaturefunction

function resetTemp () {
   document.getElementById('tv').value = '';
   document.getElementById('tempout').value = '';
   document.getElementById('error').innerText = '';
}


//Area

function area () {

  

   let areaSelect1 = document.getElementById('area1').value;
   let areaSelect2 = document.getElementById('area2').value;
   let areaValue = parseInt( document.getElementById('av').value);

   if (areaValue !=NaN && (areaValue >= 0)) {
      document.getElementById('error').innerHTML = '';

   if (areaSelect1 == 'sqmeter' && areaSelect2 == 'sqmeter') {
      let sqm2sqm = sqm2sqmeter(areaValue);

      document.getElementById('areaout').value = sqm2sqm;
   }

   else if (areaSelect1 == 'sqmeter' && areaSelect2 == 'sqkilometer') {
      let sqkm = sqmt2sqkm(areaValue);

      document.getElementById('areaout').value = sqkm;
   }

   else if (areaSelect1 == 'sqmeter' && areaSelect2 == 'sqmillimeter') {
      let sqmm = sqmt2sqmm(areaValue);

      document.getElementById('areaout').value = sqmm;
   }

   else if (areaSelect1 == 'sqmeter' && areaSelect2 == 'sqcentimeter') {
      let sqcm = sqmt2sqcm(areaValue);

      document.getElementById('areaout').value = sqcm;
   }

   else if (areaSelect1 == 'sqmeter' && areaSelect2 == 'sqmicrometer') {
      let sqmcm = sqmt2sqmcm(areaValue);

      document.getElementById('areaout').value = sqmcm;
   }

   else if (areaSelect1 == 'sqmeter' && areaSelect2 == 'hectare') {
      let sqhec = sqmt2sqhct(areaValue);

      document.getElementById('areaout').value = sqhec;
   }

   else if (areaSelect1 == 'sqmeter' && areaSelect2 == 'sqmile') {
      let sqmile = sqmt2sqmile(areaValue);

      document.getElementById('areaout').value = sqmile;
   }

   else if (areaSelect1 == 'sqmeter' && areaSelect2 == 'sqyard') {
      let sqyd = sqmt2sqyard(areaValue);

      document.getElementById('areaout').value = sqyd;
   }

   else if (areaSelect1 == 'sqmeter' && areaSelect2 == 'sqfoot') {
      let sqft = sqmt2sqfoot(areaValue);

      document.getElementById('areaout').value = sqft;
   }

   else if (areaSelect1 == 'sqmeter' && areaSelect2 == 'sqinch') {
      let sqinch = sqmt2sqinch(areaValue);

      document.getElementById('areaout').value = sqinch;
   }

   else if (areaSelect1 == 'sqmeter' && areaSelect2 == 'acre') {
      let acre = sqmt2acre(areaValue);

      document.getElementById('areaout').value = acre;
   }

   else if (areaSelect1 == 'sqkilometer' && areaSelect2 == 'sqkilometer') {
      let sqkm = sqkm2sqkm(areaValue);

      document.getElementById('areaout').value = sqkm;
   }

   else if (areaSelect1 == 'sqkilometer' && areaSelect2 == 'sqmeter') {
      let sqmt = sqkm2sqmt(areaValue);

      document.getElementById('areaout').value = sqmt;
   }

   else if (areaSelect1 == 'sqkilometer' && areaSelect2 == 'sqmillimeter') {
      let sqmlm = sqkm2sqmlm(areaValue);

      document.getElementById('areaout').value = sqmlm;
   }

   else if (areaSelect1 == 'sqkilometer' && 'sqcentimeter') {
      let sqcm = sqkm2sqcm(areaValue);

      document.getElementById('areaout').value = sqcm;
   }

   else if (areaSelect1 == 'sqkilometer' && areaSelect2 == 'sqmicrometer') {
      let sqmcm = sqkm2sqmcm(areaValue);

      document.getElementById('areaout').value = sqmcm;
   }

   else if (areaSelect1 == 'sqkilometer' && areaSelect2 == 'hectare') {
      let hectare = sqkm2hectare(areaValue);

      document.getElementById('areaout').value = hectare;
   }

   else if (areaSelect1 == 'sqkilometer' && areaSelect2 == 'sqmile') {
      let sqml = sqkm2sqmile(areaValue);

      document.getElementById('areaout').value = sqml;
   }

   else if (areaSelect1 == 'sqkilometer' && areaSelect2 == 'sqyard') {
      let sqyd = sqkm2sqyard(areaValue);

      document.getElementById('areaout').value = sqyd;
   }

   else if (areaSelect1 == 'sqkilometer' && areaSelect2 == 'sqfoot') {
      let sqft = sqkm2sqfoot(areaValue);

      document.getElementById('areaout').value = sqft;
   }

   else if (areaSelect1 == 'sqkilometer' && areaSelect2 == 'sqinch') {
      let sqinch = sqkm2sqinch(areaValue);

      document.getElementById('areaout').value = sqinch
   }

   else if (areaSelect1 == 'sqkilometer' && areaSelect2 == 'acre') {
      let acre = sqkm2acre(areaValue);

      document.getElementById('areaout').value = acre;
   }

   else if (areaSelect1 == 'sqmillimeter' && areaSelect2 == 'sqmillimeter') {
      let sqml = sqmlm2squaremillimeter(areaValue);

      document.getElementById('areaout').value = sqml;
   }

   else if (areaSelect1 == 'sqmillimeter' && areaSelect2 == 'sqmeter') {
      let sqmeter = sqmlm2sqmeter(areaValue);
  
      document.getElementById('areaout').value = sqmeter;
   }
  
   else if (areaSelect1 == 'sqmillimeter' && areaSelect2 == 'sqkilometer') {
      let sqkm = sqmlm2sqkm(areaValue);
  
      document.getElementById('areaout').value = sqkm;
   }
  
   else if (areaSelect1 == 'sqmillimeter' && areaSelect2 == 'sqcentimeter') {
      let sqcm = sqmlm2sqcm(areaValue);
  
      document.getElementById('areaout').value = sqcm;
   }
  
   else if (areaSelect1 == 'sqmillimeter' && areaSelect2 == 'sqmicrometer') {
      let sqmcm = sqmlm2sqmcm(areaValue);
  
      document.getElementById('areaout').value = sqmcm;
   }
  
   else if (areaSelect1 == 'sqmillimeter' && areaSelect2 == 'hectare') {
      let hectare = sqmlm2hectare(areaValue);
  
      document.getElementById('areaout').value = hectare;
   }
  
   else if (areaSelect1 == 'sqmillimeter' && areaSelect2 == 'sqmile') {
      let sqmile = sqmlm2sqmile(areaValue);
  
      document.getElementById('areaout').value = sqmile;
   }
  
   else if (areaSelect1 == 'sqmillimeter' && areaSelect2 == 'sqyard') {
      let sqyard = sqmlm2sqyard(areaValue);
  
      document.getElementById('areaout').value = sqyard;
   }
  
   else if (areaSelect1 == 'sqmillimeter' && areaSelect2 == 'sqfoot') {
      let sqfoot = sqmlm2sqfoot(areaValue);
  
      document.getElementById('areaout').value = sqfoot;
   }
  
   else if (areaSelect1 == 'sqmillimeter' && areaSelect2 == 'sqinch') {
      let sqinch = sqmlm2sqinch(areaValue);

      document.getElementById('areaout').value = sqinch;
   }
  
   else if (areaSelect1 == 'sqmillimeter' && areaSelect2 == 'acre') {
      let acre = sqmlm2acre(areaValue);
  
      document.getElementById('areaout').value = acre;
   }

   else if (areaSelect1 == 'sqcentimeter' && areaSelect2 == 'sqcentimeter') {
      let sqcm = sqcm2sqcm(areaValue);

      document.getElementById('areaout').value = sqcm;
   }

   else if (areaSelect1 == 'sqcentimeter' && areaSelect2 == 'sqmeter') {
      let sqmeter = sqcm2sqmeter(areaValue);

      document.getElementById('areaout').value = sqmeter;
   }

   else if (areaSelect1 == 'sqcentimeter' && areaSelect2 == 'sqkilometer') {
      let sqkm = sqcm2sqkm(areaValue);

      document.getElementById('areaout').value = sqkm;
   } 

   else if (areaSelect1 == 'sqcentimeter' && areaSelect2 == 'sqmillimeter') {
      let sqmlm = sqcm2sqmlm(areaValue);

      document.getElementById('areaout').value = sqmlm;
   }

   else if (areaSelect1 == 'sqcentimeter' && areaSelect2 == 'sqmicrometer') {
      let sqmcm = sqcm2sqmcm(areaValue);

      document.getElementById('areaout').value = sqmcm;
   }

   else if (areaSelect1 == 'sqcentimeter' && areaSelect2 == 'hectare') {
      let hectare = sqcm2hectare(areaValue);

      document.getElementById('areaout').value = hectare;
   }

   else if (areaSelect1 == 'sqcentimeter' && areaSelect2 == 'sqmile') {
      let sqmile = sqcm2sqmile(areaValue);

      document.getElementById('areaout').value = sqmile;
   }

   else if (areaSelect1 == 'sqcentimeter' && areaSelect2 == 'sqyard') {
      let sqyard = sqcm2sqyard(areaValue);

      document.getElementById('areaout').value = sqyard;
   }

   else if (areaSelect1 == 'sqcentimeter' && areaSelect2 == 'sqfoot') {
      let sqfoot = sqcm2sqfoot(areaValue);

      document.getElementById('areaout').value = sqfoot;
   }

   else if (areaSelect1 == 'sqcentimeter' && areaSelect2 == 'sqinch') {
      let sqinch = sqcm2sqinch(areaValue);

      document.getElementById('areaout').value = sqinch;
   }

   else if (areaSelect1 == 'sqcentimeter' && areaSelect2 == 'acre') {
      let acre = sqcm2acre(areaValue);

      document.getElementById('areaout').value = acre;
   }

   else if (areaSelect1 == 'sqmicrometer' && areaSelect2 == 'sqmicrometer') {
      let sqmcm = sqmcm2sqcm(areaValue);

      document.getElementById('areaout').value = sqmcm;
   }

   else if (areaSelect1 == 'sqmicrometer' && areaSelect2 == 'sqmeter') {
      let sqmeter = sqmcm2sqmeter(areaValue);

      document.getElementById('areaout').value = sqmeter;
   }

   else if (areaSelect1 == 'sqmicrometer' && areaSelect2 == 'sqkilometer') {
      let sqkm = sqmcm2sqkm(areaValue);

      document.getElementById('areaout').value = sqkm;
   }

   else if (areaSelect1 == 'sqmicrometer' && areaSelect2 == 'sqmillimeter') {
      let sqmlm = sqmcm2sqmlm(areaValue);

      document.getElementById('areaout').value = sqmlm;
   }

   else if (areaSelect1 == 'sqmicrometer' && areaSelect2 == 'sqcentimeter') {
      let sqcm = sqmcm2sqcm(areaValue);

      document.getElementById('areaout').value = sqcm;
   }

   else if (areaSelect1 == 'sqmicrometer' && areaSelect2 == 'hectare') {
      let hectare = sqmcm2hectare(areaValue);

      document.getElementById('areaout').value = hectare;
   }

   else if (areaSelect1 == 'sqmicrometer' && areaSelect2 == 'sqmile') {
      let sqmile = sqmcm2sqmile(areaValue);

      document.getElementById('areaout').value = sqmile;
   }

   else if (areaSelect1 == 'sqmicrometer' && areaSelect2 == 'sqyard') {
      let sqyard = sqmcm2sqyard(areaValue);

      document.getElementById('areaout').value = sqyard;
   }

   else if (areaSelect1 == 'sqmicrometer' && areaSelect2 == 'sqfoot') {
      let sqfoot = sqmcm2sqfoot(areaValue);

      document.getElementById('areaout').value = sqfoot;
   }

   else if (areaSelect1 == 'sqmicrometer' && areaSelect2 == 'sqinch') {
      let sqinch = sqmcm2sqinch(areaValue);

      document.getElementById('areaout').value = sqinch;
   }

   else if (areaSelect1 == 'sqmicrometer' && areaSelect2 == 'acre') {
      let acre = sqmcm2acre(areaValue);

      document.getElementById('areaout').value = acre;
   }

   else if (areaSelect1 == 'hectare' && areaSelect2 == 'hectare') {
      let hecatre = hectare2hectare(areaValue);

      document.getElementById('areaout').value = hecatre;
   }
  
   else if (areaSelect1 == 'hectare' && areaSelect2 == 'sqmeter') {
      let sqmeter = hectare2squaremeter(areaValue);

      document.getElementById('areaout').value = sqmeter;
   }

   else if (areaSelect1 == 'hectare' && areaSelect2 == 'sqkilometer') {
      let sqkm = hectare2sqkm(areaValue);

      document.getElementById('areaout').value = sqkm;
   }

   else if (areaSelect1 == 'hectare' && areaSelect2 == 'sqmillimeter') {
      let sqmlm = hectare2sqmlm(areaValue);

      document.getElementById('areaout').value = sqmlm;
   }

   else if (areaSelect1 == 'hectare' && areaSelect2 == 'sqcentimeter') {
      let sqcm = hectare2sqcm(areaValue);

      document.getElementById('areaout').value = sqcm;
   }

   else if (areaSelect1 == 'hectare' && areaSelect2 == 'sqmicrometer') {
      let sqmcm = hectare2sqmcm(areaValue);

      document.getElementById('areaout').value = sqmcm;
   }

   else if (areaSelect1 == 'hectare' && areaSelect2 == 'sqmile') {
      let sqmile = hectare2squaremile(areaValue);

      document.getElementById('areaout').value = sqmile;
   }

   else if (areaSelect1 == 'hectare' && areaSelect2 == 'sqyard') {
      let sqyard = hectare2squareyard(areaValue);

      document.getElementById('areaout').value = sqyard;
   }

   else if (areaSelect1 == 'hectare' && areaSelect2 == 'sqfoot') {
      let sqfoot = hectare2squarefoot(areaValue);

      document.getElementById('areaout').value = sqfoot;
   }

   else if (areaSelect1 == 'hectare' && areaSelect2 == 'sqinch') {
      let sqinch = hectare2squareinch(areaValue);

      document.getElementById('areaout').value = sqinch;
   }

   else if (areaSelect1 == 'hectare' && areaSelect2 == 'acre') {
      let acre = hectare2acre(areaValue);

      document.getElementById('areaout').value = acre;
   }

   else if (areaSelect1 == 'sqmile' && areaSelect2 == 'sqmile') {
      let sqmile = sqmile2sqmile(areaValue);

      document.getElementById('areaout').value = sqmile;
   }

   else if (areaSelect1 == 'sqmile' && areaSelect2 == 'sqmeter') {
      let sqmeter = sqmile2sqmeter(areaValue);

      document.getElementById('areaout').value = sqmeter;
   }

   else if (areaSelect1 == 'sqmile' && areaSelect2 == 'sqkilometer') {
      let sqkm = sqmile2sqkm(areaValue);

      document.getElementById('areaout').value = sqkm;
   }

   else if (areaSelect1 == 'sqmile' && areaSelect2 == 'sqmillimeter') {
      let sqmlm = sqmile2sqmlm(areaValue);

      document.getElementById('areaout').value = sqmlm;
   }

   else if (areaSelect1 == 'sqmile' && areaSelect2 == 'sqcentimeter') {
      let sqcm = sqmile2sqcm(areaValue);

      document.getElementById('areaout').value = sqcm;
   }

   else if (areaSelect1 == 'sqmile' && areaSelect2 == 'sqmicrometer') {
      let sqmcm = sqmile2sqmcm(areaValue);

      document.getElementById('areaout').value = sqmcm;
   }

   else if (areaSelect1 == 'sqmile' && areaSelect2 == 'hectare') {
      let hectare = sqmile2hectare(areaValue);

      document.getElementById('areaout').value = hectare;
   }

   else if (areaSelect1 == 'sqmile' && areaSelect2 == 'sqyard') {
      let sqyard = sqmile2sqyard(areaValue);

      document.getElementById('areaout').value = sqyard;
   }

   else if (areaSelect1 == 'sqmile' && areaSelect2 == 'sqfoot') {
      let sqfoot = sqmile2sqfoot(areaValue);

      document.getElementById('areaout').value = sqfoot;
   }

   else if (areaSelect1 == 'sqmile' && areaSelect2 == 'sqinch') {
      let sqinch = sqmile2sqinch(areaValue);

      document.getElementById('areaout').value = sqinch;
   }

   else if (areaSelect1 == 'sqmile' && areaSelect2 == 'acre') {
      let acre = sqmile2acre(areaValue);

      document.getElementById('areaout').value = acre;
   }

   else if (areaSelect1 == 'sqyard' && areaSelect2 == 'sqyard') {
      let sqyard = sqyard2sqyard(areaValue);

      document.getElementById('areaout').value = sqyard;
   }

   else if (areaSelect1 == 'sqyard' && areaSelect2 == 'sqmeter') {
      let sqmeter = sqyard2sqmeter(areaValue);

      document.getElementById('areaout').value = sqmeter;
   }

   else if (areaSelect1 == 'sqyard' && areaSelect2 == 'sqkilometer') {
      let sqkm = sqyard2sqkm(areaValue);

      document.getElementById('areaout').value = sqkm;
   }

   else if (areaSelect1 == 'sqyard' && areaSelect2 == 'sqmillimeter') {
      let sqmlm = sqyard2sqmlm(areaValue);

      document.getElementById('areaout').value = sqmlm;
   }

   else if (areaSelect1 == 'sqyard' && areaSelect2 == 'sqcentimeter') {
      let sqcm = sqyard2sqcm(areaValue);

      document.getElementById('areaout').value = sqcm;
   }

   else if (areaSelect1 == 'sqyard' && areaSelect2 == 'sqmicrometer') {
      let sqmcm = sqyard2sqmcm(areaValue);

      document.getElementById('areaout').value = sqmcm;
   }

   else if (areaSelect1 == 'sqyard' && areaSelect2 == 'hectare') {
      let hecatre = sqmile2hectare(areaValue);
      document.getElementById('areaout').value = hecatre;
   }
   
   else if (areaSelect1 == 'sqyard' && areaSelect2 == 'sqmile') {
      let sqmile = sqyard2sqmile(areaValue);

      document.getElementById('areaout').value = sqmile;
   }

   else if (areaSelect1 == 'sqyard' && areaSelect2 == 'sqfoot') {
      let sqfoot = sqyard2sqfoot(areaValue);

      document.getElementById('areaout').value = sqfoot;
   }

   else if (areaSelect1 == 'sqyard' && areaSelect2 == 'sqinch') {
      let sqinch = sqyard2sqinch(areaValue);

      document.getElementById('areaout').value = sqinch;
   }

   else if (areaSelect1 == 'sqyard' && areaSelect2 == 'acre') {
      let acre = sqmile2acre(areaValue);

      document.getElementById('areaout').value = acre;
   }

   else if (areaSelect1 == 'sqfoot' && areaSelect2 == 'sqfoot') {
      let sqfoot = sqfoot2sqfoot(areaValue);

      document.getElementById('areaout').value = sqfoot;
   }

   else if (areaSelect1 == 'sqfoot' && areaSelect2 == 'sqmeter') {
      let sqmeter = sqfoot2sqmeter(areaValue);

      document.getElementById('areaout').value = sqmeter;
   }

   else if (areaSelect1 == 'sqfoot' && areaSelect2 == 'sqkilometer') {
      let sqkm = sqft2sqkm(areaValue);

      document.getElementById('areaout').value = sqkm;
   }

   else if (areaSelect1 == 'sqfoot' && areaSelect2 == 'sqmillimeter') {
      let sqmlm = sqft2sqmlm(areaValue);

      document.getElementById('areaout').value = sqmlm;
   }

   else if (areaSelect1 == 'sqfoot' && areaSelect2 == 'sqcentimeter') {
      let sqcm = sqft2sqcm(areaValue);

      document.getElementById('areaout').value = sqcm;
   }

   else if (areaSelect1 == 'sqfoot' && areaSelect2 == 'sqmicrometer') {
      let sqmcm = sqft2sqmcm(areaValue);

      document.getElementById('areaout').value = sqmcm;
   }

   else if (areaSelect1 == 'sqfoot' && areaSelect2 == 'hectare') {
      let hecatre = sqft2hectare(areaValue);

      document.getElementById('areaout').value = hecatre;
   }

   else if (areaSelect1 == 'sqfoot' && areaSelect2 == 'sqmile') {
      let sqmile = sqft2sqmile(areaValue);

      document.getElementById('areaout').value = sqmile;
   }

   else if (areaSelect1 == 'sqfoot' && areaSelect2 == 'sqyard') {
      let sqyard = sqft2sqyard(areaValue);

      document.getElementById('areaout').value = sqyard;
   }

   else if (areaSelect1 == 'sqfoot' && areaSelect2 == 'sqinch') {
      let sqinch = sqft2sqinch(areaValue);

      document.getElementById('areaout').value = sqinch;
   }

   else if (areaSelect1 == 'sqfoot' && areaSelect2 == 'acre') {
      let acre = sqft2acre(areaValue);

      document.getElementById('areaout').value = acre;
   }

   else if (areaSelect1 == 'sqinch' && areaSelect2 == 'sqinch') {
      let sqinch = sqinch2sqinch(areaValue);

      document.getElementById('areaout').value = sqinch;
   }

   else if (areaSelect1 == 'sqinch' && areaSelect2 == 'sqmeter') {
      let sqmeter = sqinch2sqmeter(areaValue);

      document.getElementById('areaout').value = sqmeter;
   }

   else if (areaSelect1 == 'sqinch' && areaSelect2 == 'sqkilometer') {
      let sqkm = sqinch2sqkm(areaValue);

      document.getElementById('areaout').value = sqkm;
   }

   else if (areaSelect1 == 'sqinch' && areaSelect2 == 'sqmillimeter') {
      let sqmlm = sqinch2sqmlm(areaValue);

      document.getElementById('areaout').value = sqmlm;
   }

   else if (areaSelect1 == 'sqinch' && areaSelect2 == 'sqcentimeter') {
      let sqcm = sqinch2sqcm(areaValue);

      document.getElementById('areaout').value = sqcm;
   }

   else if (areaSelect1 == 'sqinch' && areaSelect2 == 'sqmicrometer') {
      let sqmcm = sqinch2sqmcm(areaValue);

      document.getElementById('areaout').value = sqmcm;
   }

   else if (areaSelect1 == 'sqinch' && areaSelect2 == 'hectare') {
      let hecatre = sqinch2hectare(areaValue);

      document.getElementById('areaout').value = hecatre;
   }

   else if (areaSelect1 == 'sqinch' && areaSelect2 == 'sqmile') {
      let sqmile = sqinch2sqmile(areaValue);

      document.getElementById('areaout').value = sqmile;
   }

   else if (areaSelect1 == 'sqinch' && areaSelect2 == 'sqyard') {
      let sqyard = sqinch2sqyard(areaValue);

      document.getElementById('areaout').value = sqyard;
   }

   else if (areaSelect1 == 'sqinch' && areaSelect2 == 'sqfoot') {
      let sqfoot = sqinch2sqfoot(areaValue);

      document.getElementById('areaout').value = sqfoot;
   }

   else if (areaSelect1 == 'sqinch' && areaSelect2 == 'acre') {
      let acre = sqinch2acre(areaValue);

      document.getElementById('areaout').value = acre;
   }

   else if (areaSelect1 == 'acre' && areaSelect2 == 'acre') {
      let acre = acre2acre(areaValue);
      
      document.getElementById('areaout').value = acre;
   }

   else if (areaSelect1 == 'acre' && areaSelect2 == 'sqmeter') {
      let sqmeter = acre2sqmeter(areaValue);

      document.getElementById('areaout').value = sqmeter;
   }

   else if (areaSelect1 == 'acre' && areaSelect2 == 'sqkilometer') {
      let sqkm = acre2sqkm(areaValue);

      document.getElementById('areaout').value = sqkm;
   }

   else if (areaSelect1 == 'acre' && areaSelect2 == 'sqmillimeter') {
      let sqmlm = acre2sqmlm(areaValue);

      document.getElementById('areaout').value = sqmlm;
   }

   else if (areaSelect1 == 'acre' && areaSelect2 == 'sqcentimeter') {
      let sqcm = acre2sqcm(areaValue);

      document.getElementById('areaout').value = sqcm;
   }

   else if (areaSelect1 == 'acre' && areaSelect2 == 'sqmicrometer') {
      let sqmcm = acre2sqmcm(areaValue);

      document.getElementById('areaout').value = sqmcm;
   }

   else if (areaSelect1 == 'acre' && areaSelect2 == 'hectare') {
      let hecatre = acre2hectare(areaValue);

      document.getElementById('areaout').value = hecatre;
   }

   else if (areaSelect1 == 'acre' && areaSelect2 == 'sqmile') {
      let sqmile = acre2sqmile(areaValue);

      document.getElementById('areaout').value = sqmile;
   }

   else if (areaSelect1 == 'acre' && areaSelect2 == 'sqyard') {
      let sqyard = acre2sqyard(areaValue);

      document.getElementById('areaout').value = sqyard;
   }

   else if (areaSelect1 == 'acre' && areaSelect2 == 'sqfoot') {
      let sqfoot = acre2sqfoot(areaValue);

      document.getElementById('areaout').value = sqfoot;
   }

   else if (areaSelect1 == 'acre' && areaSelect2 == 'sqinch') {
      let sqinch = acre2sqinch(areaValue);

      document.getElementById('areaout').value = sqinch;
   }
} else {
   error.innerText = 'Not a number!'
   document.getElementById('areaout').value = '';
}


}

//resetArea

function resetArea () {
   document.getElementById('av').value = '';
   document.getElementById('areaout').value = '';
}


//volumeConvert

function volumeConvert () {
   let volSelect1 = document.getElementById('volume1').value;
   let volSelect2 = document.getElementById('volume2').value;
   let volValue = parseInt( document.getElementById('vv').value);

   if (volValue !=NaN && (volValue >= 0)) {
      document.getElementById('error').innerHTML = '';

   if (volSelect1 == 'cbmeter' && volSelect2 == 'cbmeter') {
      let cbmeter = cbmeter2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'cbkilometer') {
      let cbkm = cbmeter2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'cbcentimeter') {
      let cbcm = cbmeter2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'cbmillimeter') {
      let cbmlm = cbmeter2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'liter') {
      let liter = cubicmeter2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'milliliter') {
      let cbmillimeter = cubicmeter2milliliter(volValue);

      document.getElementById('volout').value = cbmillimeter;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'usgallon') {
      let usgln = cubicmeter2usgallon(volValue);

      document.getElementById('volout').value = usgln;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'usquart') {
      let usqrt = cubicmeter2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'uspint') {
      let uspint = cubicmeter2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'uscup') {
      let uscup = cubicmeter2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'usfluidounce') {
      let usfldounce = cubicmeter2usfluidounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'ustablespoon') {
      let ustablespoon = cubicmeter2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'usteaspoon') {
      let usteaspoon = cubicmeter2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'impgallon') {
      let imperialgallon = cubicmeter2imperialgallon(volValue);

      document.getElementById('volout').value = imperialgallon;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'impquart') {
      let impquart = cubicmeter2imperialquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'imppint') {
      let imperialpint = cubicmeter2imperialpint(volValue);

      document.getElementById('volout').value = imperialpint;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'impfluidounce') {
      let impfldounce = cubicmeter2imperialfluidounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'imptablespoon') {
      let imptablespoon = cubicmeter2imperialtablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'impteaspoon') {
      let impteaspoon = cubicmeter2imperialteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'cbkilometer') {
      let cbkm = cbmeter2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'cbmile') {
      let cbmile = cubicmeter2cubicmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'cbyard') {
      let cbyard = cubicmeter2cubicyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'cbfoot') {
      let cbfoot = cubicmeter2cubicfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'cbmeter' && volSelect2 == 'cbinch') {
      let cbinch = cubicmeter2cubicinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'cbkilometer') {
      let cbkm = cubickm2cubickm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'cbmeter') {
      let cubicmeter = cbkm2cbmeter(volValue);

      document.getElementById('volout').value = cubicmeter;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'cbcentimeter') {
      let cbcm = cbkm2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'cbmillimeter') {
      let cbmlm = cbkm2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'liter') {
      let liter = cbkm2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'milliliter') {
      let milliliter = cubickm2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'usgallon') {
      let usgallon = cbkm2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'usquart') {
      let usqrt = cubickm2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'uspint') {
      let uspint = cubickm2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'uscup') {
      let uscup = cbkm2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'usfluidounce') {
      let usfluidounce = cubickm2usfluidounce(volValue);

      document.getElementById('volout').value =  usfluidounce;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'ustablespoon') {
      let ustablespoon = cubickm2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'usteaspoon') {
      let usteaspoon = cubickm2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'impgallon') {
      let impgallon = cubickm2imperialgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'impquart') {
      let impquart = cubickm2imperialquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'imppint') {
      let imppint = cubickm2imperialpint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'impfluidounce') {
      let impfluidounce = cubickm2imperialfluidounce(volValue);

      document.getElementById('volout').value = impfluidounce;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'imptablespoon') {
      let imptablespoon = cubickm2imperialtablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'impteaspoon') {
      let impteaspoon = cubickm2imperialteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'cbmile') {
      let cbmile = cubickm2cubicmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'cbyard') {
      let cbyard = cubickm2cubicyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'cbfoot') {
      let cbfoot = cubickm2cubicfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'cbkilometer' && volSelect2 == 'cbinch') {
      let cbinch = cubickm2cubicinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'cbcentimeter') {
      let cbcm = cubiccm2cubiccm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'cbmeter') {
      let cbmeter = cubicm2cubicmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'cbkilometer') {
      let cbkm = cubiccm2cubickm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'cbmillimeter') {
      let cbmlm = cubiccm2cubicmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'liter') {
      let liter = cubiccm2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'milliliter') {
      let  mllitr = cubiccm2milliliter(volValue);

      document.getElementById('volout').value = mllitr;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'usgallon') {
      let usgallon = cubiccm2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'uspint') {
      let uspint = cubiccm2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'usquart') {
      let usqrt = cubiccm2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'uscup') {
      let uscup = cubiccm2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'usfluidounce') {
      let usfldounce = cubiccm2usfluidounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'ustablespoon') {
      let ustablespoon = cubiccm2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'usteaspoon') {
      let usteaspoon = cubiccm2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'impgallon') {
      let imperialgallon = cubiccm2imperialgallon(volValue);

      document.getElementById('volout').value = imperialgallon;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'impquart') {
      let impquart = cubiccm2imperialquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'imppint') {
      let imppint = cubiccm2imperialpint(volValue);

      document.getElementById('volout').value = imppint;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'impfluidounce') {
      let impfldounce = cubiccm2imperialfluidounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'imptablespoon') {
      let imptablespoon = cubiccm2imperialtablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'impteaspoon') {
      let impteaspoon = cubiccm2imperialteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'cbmile') {
      let cbmile = cubiccm2cubicmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'cbyard') {
      let cbyard = cubiccm2cubicyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'cbfoot') {
      let cbfoot = cubiccm2cubicfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   
   else if (volSelect1 == 'cbcentimeter' && volSelect2 == 'cbinch') {
      let cbinch = cubiccm2cubicinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'cbmillimeter') {
      let cbmlm = cubicmlm2cubicmlm(volValue);
      
      document.getElementById('volout').value = cbmlm
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'cbmeter') {
      let cbmeter = cubicmlm2cubicmeter(volValue);
      
      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'cbkilometer') {
      let cbkm = cubicmlm2cubickm(volValue);
      
      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'cbcentimeter') {
      let cbcm = cubicmlm2cubiccm(volValue);
      
      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'liter') {
      let liter = cubicmlm2liter(volValue);
      
      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'milliliter') {
      let milliliter = cubicmlm2milliliter(volValue);
      
      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'usgallon') {
      let usgallon = cubicmlm2usgallon(volValue);
      
      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'usquart') {
      let usqrt = cubicmlm2usquart(volValue);
      
      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'uspint') {
      let uspint = cubicmlm2uspint(volValue);
      
      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'uscup') {
      let uscup = cubicmlm2uscup(volValue);
      
      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'usfluidounce') {
      let usfldounce = cubicmlm2usfluidounce(volValue);
      
      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'ustablespoon') {
      let ustablespoon = cubicmlm2ustablespoon(volValue);
      
      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'usteaspoon') {
      let usteaspoon = cubicmlm2usteaspoon(volValue);
      
      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'impgallon') {
      let impgallon = cubicmlm2imperialgallon(volValue);
      
      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'impquart') {
      let imperialquart = cubicmlm2imperialquart(volValue);
      
      document.getElementById('volout').value = imperialquart;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'imppint') {
      let imppint = cubicmlm2imperialpint(volValue);
      
      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'impfluidounce') {
      let impfldounce = cubicmlm2impfluidounce(volValue);
      
      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'imptablespoon') {
      let imptablespoon = cubicmlm2imptablespoon(volValue);
      
      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'impteaspoon') {
      let impteaspoon = cubicmlm2impteaspoon(volValue);
      
      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'cbmile') {
      let cbmile = cubicmlm2cubicmile(volValue);
      
      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'cbyard') {
      let cbyard = cubicmlm2cubicyard(volValue);
      
      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'cbfoot') {
      let cbfoot = cubicmlm2cubicfoot(volValue);
      
      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'cbmillimeter' && volSelect2 == 'cbinch') {
      let cbinch = cubicmlm2cubicinch(volValue);
      
      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'liter') {
      let liter = liter2liter(volValue);

      document.getElementById('volout').value = liter
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'cbmeter') {
      let cbmeter = liter2cubicmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'cbkilometer') {
      let cbkm = liter2cubickm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'cbcentimeter') {
      let cbcm = liter2cubiccm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'cbmillimeter') {
      let millimeter = liter2cubicmillimeter(volValue);

      document.getElementById('volout').value = millimeter;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'milliliter') {
      let milliliter = liter2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'usgallon') {
      let usgallon = liter2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'usquart') {
      let usqrt = liter2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'uspint') {
      let uspint = liter2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'usfluidounce') {
      let usfldounce = liter2usfluidounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'ustablespoon') {
      let ustablespoon = liter2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'usteaspoon') {
      let usteaspoon = liter2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'impgallon') {
      let impgallon = liter2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'impquart') {
      let impquart = liter2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'uscup') {
      let uscup = liter2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'imppint') {
      let imppint = liter2imperialpint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'impfluidounce') {
      let impfldounce = liter2impfluidounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'imptablespoon') {
      let imptablespoon = liter2imptablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'impteaspoon') {
      let impteaspoon = liter2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'cbmile') {
      let cbmile = liter2cubicmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'liter' && volSelect2 ==  'cbyard') {
      let cbyard = liter2cubicyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'cbfoot') {
      let cbfoot = liter2cubicfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'liter' && volSelect2 == 'cbinch') {
      let cbinch = liter2cubicinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'milliliter') {
      let milliliter = milliliter2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'cbmeter') {
      let cbmeter = milliliter2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'cbkilometer') {
      let cbkm = milliliter2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'cbcentimeter') {
      let cbcm = milliliter2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'cbmillimeter') {
      let cbmillimeter = milliliter2cbmillimeter(volValue);

      document.getElementById('volout').value = cbmillimeter;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'liter') {
      let liter = milliliter2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'usgallon') {
      let usgallon = milliliter2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'usquart') {
      let usqrt = milliliter2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'uspint') {
      let uspint = milliliter2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'uscup') {
      let uscup = milliliter2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'usfluidounce') {
      let usfldounce = milliliter2usfluidounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'ustablespoon') {
      let ustablespoon = milliliter2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'usteaspoon') {
      let usteaspoon = milliliter2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'impquart') {
      let impquart = milliliter2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'imppint') {
      let imppint = milliliter2imperialpint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'impfluidounce') {
      let impfldounce = milliliter2impfluidounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'imptablespoon') {
      let imptablespoon = milliliter2imptablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'impteaspoon') {
      let impteaspoon = milliliter2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'cbmile') {
      let cbmile = milliliter2cubicmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'cbfoot') {
      let cbfoot = milliliter2cubicfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'cbyard') {
      let cbyard = milliliter2cubicyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'cbinch') {
      let cbinch = milliliter2cubicinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'milliliter' && volSelect2 == 'impgallon') {
      let impgallon = milliliter2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }
   
   else if (volSelect1 == 'usgallon' && volSelect2 == 'usgallon') {
      let usgallon = usgallon2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'cbmeter') {
      let cbmeter = usgallon2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'cbkilometer') {
      let cbkilometer = usgallon2cbkm(volValue);

      document.getElementById('volout').value = cbkilometer;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'cbcentimeter') {
      let cbcm = usgallon2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'cbmillimeter') {
      let cbmlm = usgallon2cbmillimeter(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'liter') {
      let liter = usgallon2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'milliliter') {
      let milliliter = usgallon2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'usquart') {
      let usqrt = usgallon2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'uspint') {
      let uspint = usgallon2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'uscup') {
      let uscup = usgallon2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'usfluidounce') {
      let usfldounce = usgallon2usfluidounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'ustablespoon') {
      let ustablespoon = usgallon2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'usteaspoon') {
      let usteaspoon = usgallon2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'impgallon') {
      let impgallon = usgallon2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'impquart') {
      let impquart = usgallon2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'imppint') {
      let imppint = usgallon2imperialpint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'impfluidounce') {
      let impfldounce = usgallon2impfluidounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'imptablespoon') {
      let imptablespoon = usgallon2imptablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'impteaspoon') {
      let impteaspoon = usgallon2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'cbmile') {
      let cbmile = usgallon2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'cbfoot') {
      let cbfoot = usgallon2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'cbyard') {
      let cbyard = usgallon2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'usgallon' && volSelect2 == 'cbinch') {
      let cbinch = usgallon2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'usquart') {
      let usqrt = usquart2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'cbmeter') {
      let cbmeter = usquart2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'cbkilometer') {
      let cbkm = usquart2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'cbcentimeter') {
      let cbcm = usquart2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'cbmillimeter') {
      let cbmlm = usquart2cbmillimeter(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'liter') {
      let liter = usquart2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'milliliter') {
      let milliliter = usquart2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'usgallon') {
      let usgallon = usquart2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'uspint') {
      let uspint = usquart2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'uscup') {
      let uscup = usquart2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'usfluidounce') {
      let usfldounce = usquart2usfluidounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'ustablespoon') {
      let ustablespoon = usquart2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'usteaspoon') {
      let usteaspoon = usquart2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'impgallon') {
      let impgallon = usquart2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'impquart') {
      let impquart = usquart2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'imppint') {
      let imppint = usquart2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'impfluidounce') {
      let impfldounce = usquart2impfluidounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'imptablespoon') {
      let imptablespoon = usquart2imptablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'impteaspoon') {
      let impteaspoon = usquart2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'cbmile') {
      let cbmile = usquart2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'cbyard') {
      let cbyard = usquart2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'cbfoot') {
      let cbfoot = usquart2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'usquart' && volSelect2 == 'cbinch') {
      let cbinch = usquart2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'uspint') {
      let uspint = uspint2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'cbmeter') {
      let cbmeter = uspint2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'cbkilometer') {
      let cbkm = uspint2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'cbcentimeter') {
      let cbcm = uspint2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'cbmillimeter') {
      let cbmlm = uspint2cbmillimeter(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'liter') {
      let liter = uspint2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'milliliter') {
      let liter = uspint2milliliter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'usgallon') {
      let usgallon = uspint2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'usquart') {
      let usqrt = uspint2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'uscup') {
      let uscup = uspint2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'usfluidounce') {
      let usfldounce = uspint2usfluidounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'ustablespoon') {
      let ustablespoon = uspint2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'usteaspoon') {
      let usteaspoon = uspint2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'impgallon') {
      let impgallon = uspint2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'impquart') {
      let impquart = uspint2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'imppint') {
      let imppint = uspint2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'impfluidounce') {
      let impfldounce = uspint2impfluidounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'imptablespoon') {
      let imptablespoon = uspint2imptablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'impteaspoon') {
      let impteaspoon = uspint2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'cbmile') {
      let cbmile = uspint2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'cbyard') {
      let cbyard = uspint2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'cbfoot') {
      let cbfoot = uspint2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'uspint' && volSelect2 == 'cbinch') {
      let cbinch = uspint2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'uscup') {
      let uscup = uscup2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'cbmeter') {
      let cbmeter = uscup2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'cbkilometer') {
      let cbkilometer = uscup2cbkm(volValue);

      document.getElementById('volout').value = cbkilometer;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'cbcentimeter') {
      let cbcentimeter = uscup2cbcm(volValue);

      document.getElementById('volout').value = cbcentimeter;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'cbmillimeter') {
      let cbmlm = uscup2cbmillimeter(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'liter') {
      let liter = uscup2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'milliliter') {
      let milliliter = uscup2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'usgallon') {
      let usgallon = uscup2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'usquart') {
      let usqrt = uscup2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'uspint') {
      let uspint = uscup2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'usfluidounce') {
      let usfldounce = uscup2usfluidounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'ustablespoon') {
      let ustablespoon = uscup2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'usteaspoon') {
      let usteaspoon = uscup2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'impgallon') {
      let impgallon = uscup2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'impquart') {
      let impquart = uscup2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'imppint') {
      let imppint = uscup2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'impfluidounce') {
      let impfldounce = uscup2impfluidounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'imptablespoon') {
      let imptablespoon = uscup2imptablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'impteaspoon') {
      let impteaspoon = uscup2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'cbmile') {
      let cbmile = uscup2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'cbfoot') {
      let cbfoot = uscup2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'cbinch') {
      let cbinch = uscup2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'uscup' && volSelect2 == 'cbyard') {
      let cbyard = uscup2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'usfluidounce') {
      let usfldounce = usfldounce2usfldounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'cbmeter') {
      let cbmeter = usfldounce2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'cbkilometer') {
      let cbkm = usfldounce2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'cbcentimeter') {
      let cbcm = usfldounce2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'cbmillimeter') {
      let cbmlm = usfldounce2cbmillimeter(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'liter') {
      let liter = usfldounce2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'milliliter') {
      let milliliter = usfldounce2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'usgallon') {
      let usgallon = usfldounce2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'usquart') {
      let usqrt = usfldounce2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'uspint') {
      let uspint = usfldounce2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'uscup') {
      let uscup = usfldounce2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'ustablespoon') {
      let ustablespoon = usfldounce2ustblspoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'usteaspoon') {
      let usteaspoon = usfldounce2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'impgallon') {
      let impgallon = usfldounce2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'impquart') {
      let impquart = usfldounce2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'imppint') {
      let imppint = usfldounce2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'impfluidounce') {
      let impfldounce = usfldounce2impfldounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'imptablespoon') {
      let imptablespoon = usfldounce2imptblspoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'impteaspoon') {
      let impteaspoon = usfldounce2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'cbmile') {
      let cbmile = usfldounce2cbmile(volValue);

      document.getElementById('volout').value =  cbmile;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'cbfoot') {
      let cbfoot = usfldounce2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'cbyard') {
      let cbyard = usfldounce2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'usfluidounce' && volSelect2 == 'cbinch') {
      let cbinch = usfldounce2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'ustablespoon') {
      let ustablespoon = ustblspoon2ustblspoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'cbmeter') {
      let cbmeter = ustblspoon2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'cbkilometer') {
      let cbkilometer = ustblspoon2cbkm(volValue);

      document.getElementById('volout').value = cbkilometer;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'cbcentimeter') {
      let cbcm = ustblspoon2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'cbmillimeter') {
      let cbmlm = ustblspoon2cbmillimeter(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'liter') {
      let liter = ustblspoon2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'milliliter') {
      let milliliter = ustblspoon2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'usgallon') {
      let usgallon = ustblspoon2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'usquart') {
      let usqrt = ustblspoon2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'uspint') {
      let uspint = ustblspoon2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'uscup') {
      let uscup = ustblspoon2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'usfluidounce') {
      let ustablespoon = ustblspoon2usfldounce(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'usteaspoon') {
      let usteaspoon = ustblspoon2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'impgallon') {
      let impgallon = ustblspoon2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'imppint') {
      let imppint = ustblspoon2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'impquart') {
      let impquart = ustblspoon2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'impfluidounce') {
      let usfldounce = ustblspoon2usfldounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'imptablespoon') {
      let imptablespoon = ustblspoon2imptblspoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'impteaspoon') {
      let impteaspoon = ustblspoon2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'cbmile') {
      let cbmile = ustblspoon2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'cbyard') {
      let cbyard = ustblspoon2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'cbfoot') {
      let cbfoot = ustblspoon2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'ustablespoon' && volSelect2 == 'cbinch') {
      let cbinch = ustblspoon2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'usteaspoon') {
      usteaspoon = usteasppon2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'cbmeter') {
      cbmeter = usteaspoon2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'cbkilometer') {
      cbkm = usteaspoon2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'cbcentimeter') {
      cbcm = usteaspoon2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'cbmillimeter') {
      cbmlm = usteaspoon2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'liter') {
      liter = usteaspoon2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'milliliter') {
      milliliter = usteaspoon2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'usgallon') {
      usgallon = usteaspoon2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'usquart') {
      usquart = usteaspoon2usquart(volValue);

      document.getElementById('volout').value = usquart;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'uspint') {
      uspint = usteaspoon2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'uscup') {
      uscup = usteaspoon2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'usfluidounce') {
      usfldounce = usteaspoon2usfldounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'ustablespoon') {
      ustablespoon = usteaspoon2ustblspoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'impgallon') {
      impgallon = usteaspoon2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'impquart') {
      impquart = usteaspoon2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'imppint') {
      imppint = usteaspoon2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'impfluidounce') {
      impfluidounce = usteaspoon2impfldounce(volValue);

      document.getElementById('volout').value = impfluidounce;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'imptablespoon') {
      imptablespoon = usteaspoon2impteaspoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'impteaspoon') {
      impteaspoon = usteaspoon2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'cbmile') {
      cbmile = usteaspoon2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'cbyard') {
      cbyard = usteaspoon2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'cbfoot') {
      cbfoot = usteaspoon2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'usteaspoon' && volSelect2 == 'cbinch') {
      cbinch = usteaspoon2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'impgallon') {
      let impgallon = impgallon2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'cbmeter') {
      let cbmeter = impgallon2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'cbkilometer') {
      let cbkilometer = impgallon2cbkm(volValue);

      document.getElementById('volout').value = cbkilometer;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'cbcentimeter') {
      let cbcentimeter = impgallon2cbcm(volValue);

      document.getElementById('volout').value = cbcentimeter;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'cbmillimeter') {
      let cbmlm = impgallon2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'liter') {
      let liter = impgallon2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'milliliter') {
      let milliliter = impgallon2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'usgallon') {
      let usgallon = impgallon2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'usquart') {
      let usqrt = impgallon2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'uspint') {
      let uspint = impgallon2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'uscup') {
      let uscup = impgallon2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'usfluidounce') {
      let usfldounce = impgallon2usfldounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'ustablespoon') {
      let ustablespoon = impgallon2ustblspoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'usteaspoon') {
      let usteaspoon = impgallon2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'impquart') {
      let impquart = impgallon2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'imppint') {
      let imppint = impgallon2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'impfluidounce') {
      let impfldounce = impgallon2impfldounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'imptablespoon') {
      let imptablespoon = impgallon2imptblspoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'impteaspoon') {
      let impteaspoon = impgallon2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'cbmile') {
      let cbmile = impgallon2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'cbyard') {
      let cbyard = impgallon2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'cbfoot') {
      let cbfoot = impgallon2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'impgallon' && volSelect2 == 'cbinch') {
      let cbinch = impgallon2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'imppint') {
      let imppint = imppint2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'cbmeter') {
      let cbmeter = imppint2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'cbkilometer') {
      let cbkm = imppint2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'cbcentimeter') {
      let cbcm = imppint2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'cbmillimeter') {
      let cbmlm = imppint2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'liter') {
      let liter = imppint2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'milliliter') {
      let milliliter = imppint2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'usgallon') {
      let usgallon = imppint2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'usquart') {
      let usqrt = imppint2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'uspint') {
      let uspint = imppint2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'uscup') {
      let uscup = imppint2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'usfluidounce') {
      let usfldounce = imppint2usfldounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'ustablespoon') {
      let ustablespoon = imppint2ustblspoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'usteaspoon') {
      let usteaspoon = imppint2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'impgallon') {
      let impgallon = imppint2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'impquart') {
      let impquart = imppint2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'impfluidounce') {
      let impfldounce = imppint2impfldounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'imptablespoon') {
      let imptablespoon = imppint2imptblspoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'impteaspoon') {
      let impteaspoon = imppint2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'cbmile') {
      let cbmile = imppint2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'cbyard') {
      let cbyard = imppint2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'cbfoot') {
      let cbfoot = imppint2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'imppint' && volSelect2 == 'cbinch') {
      let cbinch = imppint2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'impquart') {
      let impquart = impquart2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'cbmeter') {
      let cbmeter = impquart2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'cbkilometer') {
      let cbkm = impquart2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'cbmillimeter') {
      let cbmlm = impquart2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'cbcentimeter') {
      let cbcm = impquart2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'liter') {
      let liter = impquart2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'milliliter') {
      let milliliter = impquart2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'usgallon') {
      let usgallon = impquart2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'usquart') {
      let usqrt = impquart2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'uspint') {
      let uspint = impquart2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'uscup') {
      let uscup = impquart2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'usfluidounce') {
      let usfldounce = impquart2usfldounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'ustablespoon') {
      let ustablespoon = impquart2ustblspoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'usteaspoon') {
      let usteaspoon = impquart2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'impgallon') {
      let impgallon = impquart2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'imppint') {
      let imppint = impquart2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'impfluidounce') {
      let impfldounce = impquart2impfldounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'imptablespoon') {
      let imptablespoon = impquart2imptblspoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'impteaspoon') {
      let impteaspoon = impquart2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'cbmile') {
      let cbmile = impquart2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'cbyard') {
      let cbyard = impquart2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'cbfoot') {
      let cbfoot = impquart2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'impquart' && volSelect2 == 'cbinch') {
      let cbinch = impquart2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'impfluidounce') {
      impfluidounce = impfldounce2impfldounce(volValue);

      document.getElementById('volout').value = impfluidounce;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'cbmeter') {
      cbmeter = impfldounce2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'cbkilometer') {
      cbkm = impfldounce2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'cbcentimeter') {
      cbcm = impfldounce2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'cbmillimeter') {
      cbmlm = impfldounce2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'liter') {
      liter = impfldounce2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'milliliter') {
      milliliter = impfldounce2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'usgallon') {
      usgallon = impfldounce2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'usquart') {
      usquart = impfldounce2usquart(volValue);

      document.getElementById('volout').value = usquart;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'uspint') {
      uspint = impfldounce2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'uscup') {
      uscup = impfldounce2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'usfluidounce') {
      usfluidounce = impfldounce2usfldounce(volValue);

      document.getElementById('volout').value = usfluidounce;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'ustablespoon') {
      ustablespoon = impfldounce2ustblspoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'usteaspoon') {
      usteaspoon = impfldounce2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'impgallon') {
      impgallon = impfldounce2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'impquart') {
      impquart = impfldounce2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'imppint') {
      imppint = impfldounce2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'imptablespoon') {
      imptablespoon = impfldounce2imptblspoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'impteaspoon') {
      impteaspoon = impfldounce2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'cbmile') {
      cbmile = impfldounce2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'cbfoot') {
      cbfoot = impfldounce2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'cbinch') {
      cbinch = impfldounce2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'impfluidounce' && volSelect2 == 'cbyard') {
      cbyard = impfldounce2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'imptablespoon') {
      imptablespoon = imptblspoon2imptblspoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'cbmeter') {
      cbmeter = imptblspoon2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'cbkilometer') {
      cbkm = imptblspoon2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'cbcentimeter') {
      cbcm = imptblspoon2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'cbmillimeter') {
      cbmlm = imptblspoon2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'liter') {
      liter = imptblspoon2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'milliliter') {
      milliliter = imptblspoon2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'usgallon') {
      usgallon = imptblspoon2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'usquart') {
      usquart = imptblspoon2usquart(volValue);

      document.getElementById('volout').value = usquart;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'uspint') {
      uspint = imptblspoon2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'uscup') {
      uscup = imptblspoon2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'usfluidounce') {
      usfluidounce = imptblspoon2usfldounce(volValue);

      document.getElementById('volout').value = usfluidounce;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'ustablespoon') {
      ustablespoon = imptblspoon2ustblspoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'usteaspoon') {
      usteaspoon = imptblspoon2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'impgallon') {
      impgallon = imptblspoon2impgallon(volValue);
 
      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'impquart') {
      impquart = imptblspoon2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'imppint') {
      imppint = imptblspoon2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'impfluidounce') {
      impfluidounce = imptblspoon2impfldounce(volValue);

      document.getElementById('volout').value = impfluidounce;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'impteaspoon') {
      impteaspoon = imptblspoon2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'cbmile') {
      cbmile = imptblspoon2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'cbyard') {
      cbyard = imptblspoon2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'cbfoot') {
      cbfoot = imptblspoon2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'imptablespoon' && volSelect2 == 'cbinch') {
      cbinch = imptblspoon2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'impteaspoon') {
      let impteaspoon = impteaspoon2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'cbmeter') {
      let cbmeter = impteaspoon2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'cbkilometer') {
      let cbkm = impteaspoon2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'cbcentimeter') {
      let cbcm = impteaspoon2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'cbmillimeter') {
      let cbmlm = impteaspoon2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'milliliter') {
      let milliliter = impteaspoon2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'liter') {
      let liter = impteaspoon2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'usgallon') {
      let usgallon = impteaspoon2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'usquart') {
      let usqrt = impteaspoon2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'uspint') {
      let uspint = impteaspoon2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'uscup') {
      let uscup = impteaspoon2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'usfluidounce') {
      let usfluidounce = impteaspoon2usfldounce(volValue);

      document.getElementById('volout').value = usfluidounce;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'ustablespoon') {
      let ustablespoon = impteaspoon2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'usteaspoon') {
      let usteaspoon = impteaspoon2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'impgallon') {
      let impgallon = impteaspoon2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'impquart') {
      let impquart = impteaspoon2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'imppint') {
      let imppint = impteaspoon2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'impfluidounce') {
      let impfldounce = impteaspoon2impfldounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'imptablespoon') {
      let imptablespoon = impteaspoon2imptablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'cbmile') {
      let cbmile = impteaspoon2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'cbyard') {
      let cbyard = impteaspoon2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'cbfoot') {
      let cbfoot = impteaspoon2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'impteaspoon' && volSelect2 == 'cbinch') {
      let cbinch = impteaspoon2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'cbmile') {
      let cbmile = cbmile2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'cbmeter') {
      let cbmeter = cbmile2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'cbkilometer') {
      let cbkm = cbmile2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'cbcentimeter') {
      let cbcm = cbmile2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'cbmillimeter') {
      let cbmlm = cbmile2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'liter') {
      let liter = cbmile2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'milliliter') {
      let milliliter = cbmile2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'usgallon') {
      let usgallon = cbmile2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'usquart') {
      let usqrt = cbmile2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'uspint') {
      let uspint = cbmile2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'uscup') {
      let uscup = cbmile2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'usfluidounce') {
      let usfldounce = cbmile2usfldounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'ustablespoon') {
      let ustablespoon = cbmile2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'usteaspoon') {
      let usteaspoon = cbmile2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'impgallon') {
      let impgallon = cbmile2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'impquart') {
      let impquart = cbmile2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'imppint') {
      let imppint = cbmile2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'impfluidounce') {
      let impfldounce = cbmile2impfldounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'imptablespoon') {
      let imptablespoon = cbmile2imptablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'impteaspoon') {
      let impteaspoon = cbmile2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'cbyard') {
      let cbyard = cbmile2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'cbfoot') {
      let cbfoot = cbmile2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'cbmile' && volSelect2 == 'cbinch') {
      let cbinch = cbmile2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'cbyard') {
      let cbyard = cbyard2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'cbmeter') {
      let cbmeter = cbyard2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'cbkilometer') {
      let cbkm = cbyard2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'cbcentimeter') {
      let cbcm = cbyard2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'cbmillimeter') {
      let cbmlm = cbyard2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'liter') {
      let liter = cbyard2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'usgallon') {
      let usgallon = cbyard2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'usquart') {
      let usqrt = cbyard2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'uspint') {
      let uspint = cbyard2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'uscup') {
      let uscup = cbyard2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'usfluidounce') {
      let usfldounce = cbyard2usfluidounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'ustablespoon') {
      let ustablespoon = cbyard2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'usteaspoon') {
      let usteaspoon = cbyard2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'impgallon') {
      let impgallon = cbyard2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'impquart') {
      let impquart = cbyard2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'imppint') {
      let imppint = cbyard2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'impfluidounce') {
      let impfldounce = cbyard2impfluidounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'imptablespoon') {
      let imptablespoon = cbyard2imptablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'impteaspoon') {
      let impteaspoon = cbyard2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'cbmile') {
      let cbmile = cbyard2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'cbfoot') {
      let cbfoot = cbyard2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'cbinch') {
      let cbinch = cbyard2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'cbyard' && volSelect2 == 'milliliter') {
      let milliliter = cbyard2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'cbfoot') {
      let cbfoot = cbfoot2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'cbmeter') {
      let cbmeter = cbfoot2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'cbkilometer') {
      let cbkm = cbfoot2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'cbcentimeter') {
      let cbcm = cbfoot2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'cbmillimeter') {
      let cbmlm = cbfoot2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'liter') {
      let liter = cbfoot2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'milliliter') {
      let milliliter = cbfoot2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'usgallon') {
      let usgallon = cbfoot2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'usquart') {
      let usqrt = cbfoot2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'uspint') {
      let uspint = cbfoot2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'uscup') {
      let uscup = cbfoot2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'usfluidounce') {
      let usfldounce = cbfoot2usfluidounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'ustablespoon') {
      let ustablespoon = cbfoot2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'usteaspoon') {
      let usteaspoon = cbfoot2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'impgallon') {
      let impgallon = cbfoot2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'impquart') {
      let impquart = cbfoot2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'imppint') {
      let imppint = cbfoot2impquart(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'impfluidounce') {
      let impfldounce = cbfoot2impfluidounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'imptablespoon') {
      let imptablespoon = cbfoot2imptablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'impteaspoon') {
      let impteaspoon = cbfoot2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'cbmile') {
      let cbmile = cbfoot2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'cbyard') {
      let cbyard = cbfoot2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'cbfoot' && volSelect2 == 'cbinch') {
      let cbinch = cbfoot2cbinch(volValue);

      document.getElementById('volout').value = cbinch;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'cbmeter') {
      let cbmeter = cbinch2cbmeter(volValue);

      document.getElementById('volout').value = cbmeter;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'cbkilometer') {
      let cbkm = cbinch2cbkm(volValue);

      document.getElementById('volout').value = cbkm;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'cbcentimeter') {
      let cbcm = cbinch2cbcm(volValue);

      document.getElementById('volout').value = cbcm;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'cbmillimeter') {
      let cbmlm = cbinch2cbmlm(volValue);

      document.getElementById('volout').value = cbmlm;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'liter') {
      let liter = cbinch2liter(volValue);

      document.getElementById('volout').value = liter;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'milliliter') {
      let milliliter = cbinch2milliliter(volValue);

      document.getElementById('volout').value = milliliter;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'usgallon') {
      let usgallon = cbinch2usgallon(volValue);

      document.getElementById('volout').value = usgallon;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'usquart') {
      let usqrt = cbinch2usquart(volValue);

      document.getElementById('volout').value = usqrt;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'uspint') {
      let uspint = cbinch2uspint(volValue);

      document.getElementById('volout').value = uspint;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'uscup') {
      let uscup = cbinch2uscup(volValue);

      document.getElementById('volout').value = uscup;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'usfluidounce') {
      let usfldounce = cbinch2usfluidounce(volValue);

      document.getElementById('volout').value = usfldounce;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'ustablespoon') {
      let ustablespoon = cbinch2ustablespoon(volValue);

      document.getElementById('volout').value = ustablespoon;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'usteaspoon') {
      let usteaspoon = cbinch2usteaspoon(volValue);

      document.getElementById('volout').value = usteaspoon;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'impgallon') {
      let impgallon = cbinch2impgallon(volValue);

      document.getElementById('volout').value = impgallon;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'impquart') {
      let impquart = cbinch2impquart(volValue);

      document.getElementById('volout').value = impquart;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'imppint') {
      let imppint = cbinch2imppint(volValue);

      document.getElementById('volout').value = imppint;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'impfluidounce') {
      let impfldounce = cbinch2impfluidounce(volValue);

      document.getElementById('volout').value = impfldounce;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'imptablespoon') {
      let imptablespoon = cbinch2imptablespoon(volValue);

      document.getElementById('volout').value = imptablespoon;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'impteaspoon') {
      let impteaspoon = cbinch2impteaspoon(volValue);

      document.getElementById('volout').value = impteaspoon;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'cbmile') {
      let cbmile = cbinch2cbmile(volValue);

      document.getElementById('volout').value = cbmile;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'cbyard') {
      let cbyard = cbinch2cbyard(volValue);

      document.getElementById('volout').value = cbyard;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'cbfoot') {
      let cbfoot = cbinch2cbfoot(volValue);

      document.getElementById('volout').value = cbfoot;
   }

   else if (volSelect1 == 'cbinch' && volSelect2 == 'cbinch') {
      let cbinch = cbinch2cbinch (volValue);

      document.getElementById('volout').value = cbinch
   }
} else {
   error.innerText = 'Please provide a valid number!'
   document.getElementById('volout').value = '';
}
  
}


//resetVolume

function resetVolume () {
   document.getElementById('vv').value = '';
   document.getElementById('volout').value = '';
} 


//weightconvert

function weight () {
   let w8Select1 = document.getElementById('weight1').value;
   let w8Select2 = document.getElementById('weight2').value;
   let w8Value = parseInt(document.getElementById('wv').value);

   if (w8Value !=NaN && (w8Value >= 0)) {
      document.getElementById('error').innerText = '';

   if (w8Select1 == 'kilogram' && w8Select2 == 'kilogram') {
      let kg = kg2kg(w8Value);

      document.getElementById('w8out').value = kg;
   }

   else if (w8Select1 == 'kilogram' && w8Select2 == 'gram') {
      let gram = kg2gram(w8Value);

      document.getElementById('w8out').value = gram;
   }

   else if (w8Select1 == 'kilogram' && w8Select2 == 'milligram') {
      let milligram = kg2milligram(w8Value);

      document.getElementById('w8out').value = milligram;
   }

   else if (w8Select1 == 'kilogram' && w8Select2 == 'metricton') {
      let metricton = kg2metricton(w8Value);

      document.getElementById('w8out').value = metricton;
   }

   else if (w8Select1 == 'kilogram' && w8Select2 == 'longton') {
      let longton = kg2longton(w8Value);

      document.getElementById('w8out').value = longton;
   }

   else if (w8Select1 == 'kilogram' && w8Select2 == 'shortton') {
      let shortton = kg2shortton(w8Value);

      document.getElementById('w8out').value = shortton;
   }

   else if (w8Select1 == 'kilogram' && w8Select2 == 'pound') {
      let pound = kg2pound(w8Value);

      document.getElementById('w8out').value = pound;
   }

   else if (w8Select1 == 'kilogram' && w8Select2 == 'ounce') {
      let ounce = kg2ounce(w8Value);

      document.getElementById('w8out').value = ounce;
   }

   else if (w8Select1 == 'kilogram' && w8Select2 == 'carat') {
      let carat = kg2carat(w8Value);

      document.getElementById('w8out').value = carat;
   }

   else if (w8Select1 == 'kilogram' && w8Select2 == 'atomicmassunit') {
      let atomicmassunit = kg2atomicmassunit(w8Value);

      document.getElementById('w8out').value = atomicmassunit;
   }

   else if (w8Select1 == 'gram' && w8Select2 == 'gram') {
      let gram = gram2gram(w8Value);

      document.getElementById('w8out').value = gram;
   }

   else if (w8Select1 == 'gram' && w8Select2 == 'kilogram') {
      let kg = gram2kg(w8Value);

      document.getElementById('w8out').value = kg;
   }

   else if (w8Select1 == 'gram' && w8Select2 == 'milligram') {
      let milligram = gram2milligram(w8Value);

      document.getElementById('w8out').value = milligram;
   }

   else if (w8Select1 == 'gram' && w8Select2 == 'metricton') {
      let metricton = gram2metricton(w8Value);

      document.getElementById('w8out').value = metricton;
   }

   else if (w8Select1 == 'gram' && w8Select2 == 'longton') {
      let longton = gram2longton(w8Value);

      document.getElementById('w8out').value = longton;
   }

   else if (w8Select1 == 'gram' && w8Select2 == 'shortton') {
      let shortton = gram2shortton(w8Value);

      document.getElementById('w8out').value = shortton;
   }

   else if (w8Select1 == 'gram' && w8Select2 == 'pound') {
      let pound = gram2pound(w8Value);

      document.getElementById('w8out').value = pound;
   }

   else if (w8Select1 == 'gram' && w8Select2 == 'ounce') {
      let ounce = gram2ounce(w8Value);

      document.getElementById('w8out').value = ounce;
   }

   else if (w8Select1 == 'gram' && w8Select2 == 'carat') {
      let carat = gram2carat(w8Value);

      document.getElementById('w8out').value = carat;
   }

   else if (w8Select1 == 'gram' && w8Select2 == 'atomicmassunit') {
      let atomicmassunit = gram2atomicmassunit(w8Value);

      document.getElementById('w8out').value = atomicmassunit;
   }

   else if (w8Select1 == 'milligram' && w8Select2 == 'milligram') {
      let milligram = milligram2milligram(w8Value);

      document.getElementById('w8out').value = milligram;
   }

   else if (w8Select1 == 'milligram' && w8Select2 == 'kilogram') {
      let kilogram = milligram2kg(w8Value);

      document.getElementById('w8out').value = kilogram;
   }

   else if (w8Select1 == 'milligram' && w8Select2 == 'gram') {
      let gram = milligram2gram(w8Value);

      document.getElementById('w8out').value = gram;
   }

   else if (w8Select1 == 'milligram' && w8Select2 == 'metricton') {
      let metricton = milligram2metricton(w8Value);

      document.getElementById('w8out').value = metricton;
   }

   else if (w8Select1 == 'milligram' && w8Select2 == 'longton') {
      let longton = milligram2longton(w8Value);

      document.getElementById('w8out').value = longton;
   }

   else if (w8Select1 == 'milligram' && w8Select2 == 'shortton') {
      let shortton = milligram2shortton(w8Value);

      document.getElementById('w8out').value = shortton;
   }

   else if (w8Select1 == 'milligram' && w8Select2 == 'pound') {
      let pound = milligram2pound(w8Value);

      document.getElementById('w8out').value = pound;
   }

   else if (w8Select1 == 'milligram' && w8Select2 == 'ounce') {
      let ounce = milligram2ounce(w8Value);

      document.getElementById('w8out').value = ounce;
   }

   else if (w8Select1 == 'milligram' && w8Select2 == 'carat') {
      let carat = milligram2carat(w8Value);

      document.getElementById('w8out').value = carat;
   }

   else if (w8Select1 == 'milligram' && w8Select2 == 'atomicmassunit') {
      let atomicmassunit = milligram2atomicmassunit(w8Value);

      document.getElementById('w8out').value = atomicmassunit;
   }

   else if (w8Select1 == 'metricton' && w8Select2 == 'metricton') {
      let metricton = metricton2metricton(w8Value);

      document.getElementById('w8out').value = metricton; 
   }

   else if (w8Select1 == 'metricton' && w8Select2 == 'kilogram') {
      let kilogram = metricton2kg(w8Value);

      document.getElementById('w8out').value = kilogram; 
   }

   else if (w8Select1 == 'metricton' && w8Select2 == 'gram') {
      let gram = metricton2gram(w8Value);

      document.getElementById('w8out').value = gram; 
   }

   else if (w8Select1 == 'metricton' && w8Select2 == 'milligram') {
      let milligram = metricton2milligram(w8Value);

      document.getElementById('w8out').value = milligram; 
   }

   else if (w8Select1 == 'metricton' && w8Select2 == 'longton') {
      let longton = metricton2longton(w8Value);

      document.getElementById('w8out').value = longton; 
   }

   else if (w8Select1 == 'metricton' && w8Select2 == 'shortton') {
      let shortton = metricton2shortton(w8Value);

      document.getElementById('w8out').value = shortton; 
   }

   else if (w8Select1 == 'metricton' && w8Select2 == 'pound') {
      let pound = metricton2pound(w8Value);

      document.getElementById('w8out').value = pound; 
   }

   else if (w8Select1 == 'metricton' && w8Select2 == 'ounce') {
      let ounce = metricton2ounce(w8Value);

      document.getElementById('w8out').value = ounce; 
   }

   else if (w8Select1 == 'metricton' && w8Select2 == 'carat') {
      let carat = metricton2carat(w8Value);

      document.getElementById('w8out').value = carat; 
   }

   else if (w8Select1 == 'metricton' && w8Select2 == 'atomicmassunit') {
      let atomicmassunit = metricton2atomicmassunit(w8Value);

      document.getElementById('w8out').value = atomicmassunit; 
   }

   else if (w8Select1 == 'longton' && w8Select2 == 'longton') {
      let longton = longton2longton(w8Value);

      document.getElementById('w8out').value = longton;
   }

   else if (w8Select1 == 'longton' && w8Select2 == 'kilogram') {
      let kg = longton2kg(w8Value);

      document.getElementById('w8out').value = kg;
   }

   else if (w8Select1 == 'longton' && w8Select2 == 'gram') {
      let gram = longton2gram(w8Value);

      document.getElementById('w8out').value = gram;
   }

   else if (w8Select1 == 'longton' && w8Select2 == 'milligram') {
      let milligram = longton2milligram(w8Value);

      document.getElementById('w8out').value = milligram;
   }

   else if (w8Select1 == 'longton' && w8Select2 == 'metricton') {
      let metricton = longton2metricton(w8Value);

      document.getElementById('w8out').value = metricton;
   }

   else if (w8Select1 == 'longton' && w8Select2 == 'shortton') {
      let shortton = longton2shortton(w8Value);

      document.getElementById('w8out').value = shortton;
   }

   else if (w8Select1 == 'longton' && w8Select2 == 'pound') {
      let pound = longton2pound(w8Value);

      document.getElementById('w8out').value = pound;
   }

   else if (w8Select1 == 'longton' && w8Select2 == 'ounce') {
      let ounce = longton2ounce(w8Value);

      document.getElementById('w8out').value = ounce;
   }

   else if (w8Select1 == 'longton' && w8Select2 == 'carat') {
      let carat = longton2carat(w8Value);

      document.getElementById('w8out').value = carat;
   }

   else if (w8Select1 == 'longton' && w8Select2 == 'atomicmassunit') {
      let atomicmassunit = longton2atomicmassunit(w8Value);

      document.getElementById('w8out').value = atomicmassunit;
   }

   else if (w8Select1 == 'shortton' && w8Select2 == 'shortton') {
      let shortton = shortton2shortton(w8Value);

      document.getElementById('w8out').value = shortton;
   }

   else if (w8Select1 == 'shortton' && w8Select2 == 'kilogram') {
      let kg = shortton2kg(w8Value);

      document.getElementById('w8out').value = kg;
   }

   else if (w8Select1 == 'shortton' && w8Select2 == 'gram') {
      let gram = shortton2gram(w8Value);

      document.getElementById('w8out').value = gram;
   }

   else if (w8Select1 == 'shortton' && w8Select2 == 'milligram') {
      let milligram = shortton2milligram(w8Value);

      document.getElementById('w8out').value = milligram;
   }

   else if (w8Select1 == 'shortton' && w8Select2 == 'metricton') {
      let metricton = shortton2smetricton(w8Value);

      document.getElementById('w8out').value = metricton;
   }

   else if (w8Select1 == 'shortton' && w8Select2 == 'longton') {
      let longton = shortton2longton(w8Value);

      document.getElementById('w8out').value = longton;
   }

   else if (w8Select1 == 'shortton' && w8Select2 == 'pound') {
      let pound = shortton2pound(w8Value);

      document.getElementById('w8out').value = pound;
   }

   else if (w8Select1 == 'shortton' && w8Select2 == 'ounce') {
      let ounce = shortton2ounce(w8Value);

      document.getElementById('w8out').value = ounce;
   }

   else if (w8Select1 == 'shortton' && w8Select2 == 'carat') {
      let carat = shortton2carat(w8Value);

      document.getElementById('w8out').value = carat;
   }

   else if (w8Select1 == 'shortton' && w8Select2 == 'atomicmassunit') {
      let atomicmassunit = shortton2atomicmassunit(w8Value);

      document.getElementById('w8out').value = atomicmassunit;
   }

   else if (w8Select1 == 'atomicmassunit' && w8Select2 == 'atomicmassunit') {
      let atomicmassunit = atomicmassunit2atomicmassunit(w8Value);

      document.getElementById('w8out').value = atomicmassunit;
   }

   else if (w8Select1 == 'atomicmassunit' && w8Select2 == 'kilogram') {
      let kg = atomicmassunit2kg(w8Value);

      document.getElementById('w8out').value = kg;
   }

   else if (w8Select1 == 'atomicmassunit' && w8Select2 == 'gram') {
      let gram = atomicmassunit2gram(w8Value);

      document.getElementById('w8out').value = gram;
   }

   else if (w8Select1 == 'atomicmassunit' && w8Select2 == 'milligram') {
      let milligram = atomicmassunit2milligram(w8Value);

      document.getElementById('w8out').value = milligram;
   }

   else if (w8Select1 == 'atomicmassunit' && w8Select2 == 'metricton') {
      let metricton = atomicmassunit2metricton(w8Value);

      document.getElementById('w8out').value = metricton;
   }

   else if (w8Select1 == 'atomicmassunit' && w8Select2 == 'longton') {
      let longton = atomicmassunit2longton(w8Value);

      document.getElementById('w8out').value = longton;
   }

   else if (w8Select1 == 'atomicmassunit' && w8Select2 == 'shortton') {
      let shortton = atomicmassunit2shortton(w8Value);

      document.getElementById('w8out').value = shortton;
   }

   else if (w8Select1 == 'atomicmassunit' && w8Select2 == 'pound') {
      let pound = atomicmassunit2pound(w8Value);

      document.getElementById('w8out').value = pound;
   }

   else if (w8Select1 == 'atomicmassunit' && w8Select2 == 'carat') {
      let carat = atomicmassunit2carat(w8Value);

      document.getElementById('w8out').value = carat;
   }

   else if (w8Select1 == 'atomicmassunit' && w8Select2 == 'ounce') {
      let ounce = atomicmassunit2ounce(w8Value);

      document.getElementById('w8out').value = ounce;
   }

   else if (w8Select1 == 'pound' && w8Select2 == 'pound') {
      let pound = pound2pound(w8Value);

      document.getElementById('w8out').value = pound;
   }

   else if (w8Select1 == 'pound' && w8Select2 == 'kilogram') {
      let kg = pound2kg(w8Value);

      document.getElementById('w8out').value = kg;
   }

   else if (w8Select1 == 'pound' && w8Select2 == 'gram') {
      let gram = pound2gram(w8Value);

      document.getElementById('w8out').value = gram;
   }

   else if (w8Select1 == 'pound' && w8Select2 == 'milligram') {
      let milligram = pound2milligram(w8Value);

      document.getElementById('w8out').value = milligram;
   }

   else if (w8Select1 == 'pound' && w8Select2 == 'metricton') {
      let metricton = pound2metricton(w8Value);

      document.getElementById('w8out').value = metricton;
   }

   else if (w8Select1 == 'pound' && w8Select2 == 'longton') {
      let longton = pound2longton(w8Value);

      document.getElementById('w8out').value = longton;
   }

   else if (w8Select1 == 'pound' && w8Select2 == 'shortton') {
      let shortton = pound2shortton(w8Value);

      document.getElementById('w8out').value = shortton;
   }

   else if (w8Select1 == 'pound' && w8Select2 == 'ounce') {
      let ounce = pound2ounce(w8Value);

      document.getElementById('w8out').value = ounce;
   }

   else if (w8Select1 == 'pound' && w8Select2 == 'carat') {
      let carat = pound2carat(w8Value);

      document.getElementById('w8out').value = carat;
   }

   else if (w8Select1 == 'pound' && w8Select2 == 'atomicmassunit') {
      let atomicmassunit = pound2atomicmassunit(w8Value);

      document.getElementById('w8out').value = atomicmassunit;
   }

   else if (w8Select1 == 'ounce' && w8Select2 == 'ounce') {
      let ounce = ounce2ounce(w8Value);

      document.getElementById('w8out').value = ounce;
   }

   else if (w8Select1 == 'ounce' && w8Select2 == 'kilogram') {
      let kg = ounce2kg(w8Value);

      document.getElementById('w8out').value = kg;
   }

   else if (w8Select1 == 'ounce' && w8Select2 == 'gram') {
      let gram = ounce2gram(w8Value);

      document.getElementById('w8out').value = gram;
   }

   else if (w8Select1 == 'ounce' && w8Select2 == 'milligram') {
      let milligram = ounce2milligram(w8Value);

      document.getElementById('w8out').value = milligram;
   }

   else if (w8Select1 == 'ounce' && w8Select2 == 'metricton') {
      let metricton = ounce2metricton(w8Value);

      document.getElementById('w8out').value = metricton;
   }

   else if (w8Select1 == 'ounce' && w8Select2 == 'shortton') {
      let shortton = ounce2shortton(w8Value);

      document.getElementById('w8out').value = shortton;
   }

   else if (w8Select1 == 'ounce' && w8Select2 == 'pound') {
      let pound = ounce2pound(w8Value);

      document.getElementById('w8out').value = pound;
   }

   else if (w8Select1 == 'ounce' && w8Select2 == 'carat') {
      let carat = ounce2carat(w8Value);

      document.getElementById('w8out').value = carat;
   }

   else if (w8Select1 == 'ounce' && w8Select2 == 'atomicmassunit') {
      let atomicmassunit = ounce2atomicmassunit(w8Value);

      document.getElementById('w8out').value = atomicmassunit;
   }

   else if (w8Select1 == 'ounce' && w8Select2 == 'longton') {
      let longton = ounce2longton(w8Value);

      document.getElementById('w8out').value = longton;
   }

   else if (w8Select1 == 'carat' && w8Select2 == 'carat') {
      let carat = carat2carat(w8Value);

      document.getElementById('w8out').value = carat;
   }

   else if (w8Select1 == 'carat' && w8Select2 == 'gram') {
      let gram = carat2gram(w8Value);

      document.getElementById('w8out').value = gram;
   }

   else if (w8Select1 == 'carat' && w8Select2 == 'milligram') {
      let milligram = carat2milligram(w8Value);

      document.getElementById('w8out').value = milligram;
   }

   else if (w8Select1 == 'carat' && w8Select2 == 'kilogram') {
      let kg = carat2kg(w8Value);

      document.getElementById('w8out').value = kg;
   }

   else if (w8Select1 == 'carat' && w8Select2 == 'metricton') {
      let metricton = carat2metricton(w8Value);

      document.getElementById('w8out').value = metricton;
   }

   else if (w8Select1 == 'carat' && w8Select2 == 'longton') {
      let longton = carat2longton(w8Value);

      document.getElementById('w8out').value = longton;
   }

   else if (w8Select1 == 'carat' && w8Select2 == 'shortton') {
      let shortton = carat2shortton(w8Value);

      document.getElementById('w8out').value = shortton;
   }

   else if (w8Select1 == 'carat' && w8Select2 == 'pound') {
      let pound = carat2pound(w8Value);

      document.getElementById('w8out').value = pound;
   }

   else if (w8Select1 == 'carat' && w8Select2 == 'ounce') {
      let ounce = carat2ounce(w8Value);

      document.getElementById('w8out').value = ounce;
   }

   else if (w8Select1 == 'carat' && w8Select2 == 'atomicmassunit') {
      let atomicmassunit = carat2atomicmassunit(w8Value);

      document.getElementById('w8out').value = atomicmassunit;
   }

   } else {
      error.innerText = 'Please provide a valid number!'
      document.getElementById('w8out').value = '';
   }
}

//weightreset

function weightreset () {
   document.getElementById('wv').value = '';
   document.getElementById('w8out').value = '';
}


//timeconvert

function time () {
   let timeSelect1 = document.getElementById('time1').value;
   let timeSelect2 = document.getElementById('time2').value;
   let timeValue = parseInt(document.getElementById('timev').value);

   if (timeValue !=NaN && (timeValue >= 0)) {
      document.getElementById('error').innerText = '';

      if (timeSelect1 == 'second' && timeSelect2 == 'second') {
         let second = scnd2scnd(timeValue);

         document.getElementById('timeout').value = second;
      }

     else if (timeSelect1 == 'second' && timeSelect2 == 'millisecond') {
         let millisecond = scnd2milliscnd(timeValue);

         document.getElementById('timeout').value = millisecond;
      }

     else if (timeSelect1 == 'second' && timeSelect2 == 'microsecond') {
         let microsecond = scnd2microscnd(timeValue);

         document.getElementById('timeout').value = microsecond;
      }

    else  if (timeSelect1 == 'second' && timeSelect2 == 'nanosecond') {
         let nanosecond = scnd2nanoscnd(timeValue);

         document.getElementById('timeout').value = nanosecond;
      }

    else  if (timeSelect1 == 'second' && timeSelect2 == 'picosecond') {
         let picosecond = scnd2picosecond(timeValue);

         document.getElementById('timeout').value = picosecond;
      }

     else if (timeSelect1 == 'second' && timeSelect2 == 'minute') {
         let mint = scnd2mint(timeValue);

         document.getElementById('timeout').value = mint;
      }

    else  if (timeSelect1 == 'second' && timeSelect2 == 'hour') {
         let hour = scnd2hour(timeValue);

         document.getElementById('timeout').value = hour;
      }

   else   if (timeSelect1 == 'second' && timeSelect2 == 'day') {
         let day = scnd2day(timeValue);

         document.getElementById('timeout').value = day;
      }

    else  if (timeSelect1 == 'second' && timeSelect2 == 'week') {
         let week = scnd2week(timeValue);

         document.getElementById('timeout').value = week;
      }

   else   if (timeSelect1 == 'second' && timeSelect2 == 'month') {
         let month = scnd2month(timeValue);

         document.getElementById('timeout').value = month;
      }

     else if (timeSelect1 == 'second' && timeSelect2 == 'year') {
         let year = scnd2year(timeValue);

         document.getElementById('timeout').value = year;
      }

      else if (timeSelect1 == 'millisecond' && timeSelect2 == 'millisecond') {
         let millisecond = millisecond2millisecond(timeValue);

         document.getElementById('timeout').value = millisecond;
      }

      else if (timeSelect1 == 'millisecond' && timeSelect2 == 'second') {
         let second = millisecond2second(timeValue);

         document.getElementById('timeout').value = second;
      }

      else if (timeSelect1 == 'millisecond' && timeSelect2 == 'microsecond') {
         let microsecond = millisecond2microsecond(timeValue);

         document.getElementById('timeout').value = microsecond;
      }

      else if (timeSelect1 == 'millisecond' && timeSelect2 == 'nanosecond') {
         let nanosecond = millisecond2nanosecond(timeValue);

         document.getElementById('timeout').value = nanosecond;
      }

      else if (timeSelect1 == 'millisecond' && timeSelect2 == 'picosecond') {
         let picosecond = millisecond2picosecond(timeValue);

         document.getElementById('timeout').value = picosecond;
      }

      else if (timeSelect1 == 'millisecond' && timeSelect2 == 'minute') {
         let mint = millisecond2mint(timeValue);

         document.getElementById('timeout').value = mint;
      }

      else if (timeSelect1 == 'millisecond' && timeSelect2 == 'hour') {
         let  hour = millisecond2hour(timeValue);

         document.getElementById('timeout').value = hour;
      }

      else if (timeSelect1 == 'millisecond' && timeSelect2 == 'day') {
         let day = millisecond2day(timeValue);

         document.getElementById('timeout').value = day;
      }

      else if (timeSelect1 == 'millisecond' && timeSelect2 == 'week') {
         let week = millisecond2week(timeValue);

         document.getElementById('timeout').value = week;
      }

      else if (timeSelect1 == 'millisecond' && timeSelect2 == 'month') {
         let month = millisecond2month(timeValue);

         document.getElementById('timeout').value = month;
      }

      else if (timeSelect1 == 'millisecond' && timeSelect2 == 'year') {
         let year = millisecond2year(timeValue);

         document.getElementById('timeout').value = year;
      }
      
      else if (timeSelect1 == 'microsecond' && timeSelect2 == 'microsecond') {
         let microsecond = microsecond2microsecond(timeValue);

         document.getElementById('timeout').value = microsecond;
      }

      else if (timeSelect1 == 'microsecond' && timeSelect2 == 'second') {
         let second = microsecond2second(timeValue);

         document.getElementById('timeout').value = second;
      }

      else if (timeSelect1 == 'microsecond' && timeSelect2 == 'millisecond') {
         let millisecond = microsecond2millisecond(timeValue);

         document.getElementById('timeout').value = millisecond;
      }

      else if (timeSelect1 == 'microsecond' && timeSelect2 == 'nanosecond') {
         let nanosecond = microsecond2nanosecond(timeValue);

         document.getElementById('timeout').value = nanosecond;
      }

      else if (timeSelect1 == 'microsecond' && timeSelect2 == 'picosecond') {
         let picosecond = microsecond2picosecond(timeValue);

         document.getElementById('timeout').value = picosecond;
      }

      else if (timeSelect1 == 'microsecond' && timeSelect2 == 'minute') {
         let mint = microsecond2mint(timeValue);

         document.getElementById('timeout').value = mint;
      }

      else if (timeSelect1 == 'microsecond' && timeSelect2 == 'hour') {
         let hour = microsecond2hour(timeValue);

         document.getElementById('timeout').value = hour;
      }

      else if (timeSelect1 == 'microsecond' && timeSelect2 == 'day') {
         let day = microsecond2day(timeValue);

         document.getElementById('timeout').value = day;
      }

      else if (timeSelect1 == 'microsecond' && timeSelect2 == 'week') {
         let week = microsecond2week(timeValue);

         document.getElementById('timeout').value = week;
      }

      else if (timeSelect1 == 'microsecond' && timeSelect2 == 'month') {
         let month = microsecond2month(timeValue);

         document.getElementById('timeout').value = month;
      }

      else if (timeSelect1 == 'microsecond' && timeSelect2 == 'year') {
         let year = microsecond2year(timeValue);

         document.getElementById('timeout').value = year;
      }

      else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'nanosecond') {
         let nanosecond = nanosecond2nanosecond(timeValue);

         document.getElementById('timeout').value = nanosecond;
      }

      else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'second') {
         let second = nanosecond2second(timeValue);

         document.getElementById('timeout').value = second;
      }

      else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'millisecond') {
         let millisecond = nanosecond2millisecond(timeValue);

         document.getElementById('timeout').value = millisecond;
      }

      else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'microsecond') {
         let microsecond = nanosecond2microsecond(timeValue);

         document.getElementById('timeout').value = microsecond;
      }

      else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'picosecond') {
         let picosecond = nanosecond2picosecond(timeValue);

         document.getElementById('timeout').value = picosecond;
      }

      else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'minute') {
         let mint = nanosecond2mint(timeValue);

         document.getElementById('timeout').value = mint;
      }

      else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'hour') {
         let hour = nanosecond2hour(timeValue);

         document.getElementById('timeout').value = hour;
      }

      else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'day') {
         let day = nanosecond2day(timeValue);

         document.getElementById('timeout').value = day;
      }

      else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'week') {
         let week = nanosecond2week(timeValue);

         document.getElementById('timeout').value = week;
      }

      else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'month') {
         let month = nanosecond2month(timeValue);

         document.getElementById('timeout').value = month;
      }

      else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'year') {
         let year = nanosecond2year(timeValue);

         document.getElementById('timeout').value = year;
      }

      else if (timeSelect1 == 'picosecond' && timeSelect2 == 'picosecond') {
         let picosecond = picosecond2picosecond(timeValue);

         document.getElementById('timeout').value = picosecond;
      }

      else if (timeSelect1 == 'picosecond' && timeSelect2 == 'second') {
         let second = picosecond2second(timeValue);

         document.getElementById('timeout').value = second;
      }

      else if (timeSelect1 == 'picosecond' && timeSelect2 == 'microsecond') {
         let microsecond = picosecond2microsecond(timeValue);

         document.getElementById('timeout').value = microsecond;
      }

      else if (timeSelect1 == 'picosecond' && timeSelect2 == 'millisecond') {
         let millisecond = picosecond2millisecond(timeValue);

         document.getElementById('timeout').value = millisecond;
      }

      else if (timeSelect1 == 'picosecond' && timeSelect2 == 'nanosecond') {
         let nanosecond = picosecond2nanosecond(timeValue);

         document.getElementById('timeout').value = nanosecond;
      }

      else if (timeSelect1 == 'picosecond' && timeSelect2 == 'minute') {
         let mint = picosecond2mint(timeValue);

         document.getElementById('timeout').value = mint;
      }

      else if (timeSelect1 == 'picosecond' && timeSelect2 == 'hour') {
         let hour = picosecond2hour(timeValue);

         document.getElementById('timeout').value = hour;
      }

      else if (timeSelect1 == 'picosecond' && timeSelect2 == 'day') {
         let day = picosecond2day(timeValue);

         document.getElementById('timeout').value = day;
      }

      else if (timeSelect1 == 'picosecond' && timeSelect2 == 'week') {
         let week = picosecond2week(timeValue);

         document.getElementById('timeout').value = week;
      }

      else if (timeSelect1 == 'picosecond' && timeSelect2 == 'month') {
         let month = picosecond2month(timeValue);

         document.getElementById('timeout').value = month;
      }

      else if (timeSelect1 == 'picosecond' && timeSelect2 == 'year') {
         let year = picosecond2year(timeValue);

         document.getElementById('timeout').value = year;
      }

      else if (timeSelect1 == 'minute' && timeSelect2 == 'minute') {
         let mint = mint2mint(timeValue);

         document.getElementById('timeout').value = mint;
      }

      else if (timeSelect1 == 'minute' && timeSelect2 == 'second') {
         let second = mint2second(timeValue);

         document.getElementById('timeout').value = second;
      }

      else if (timeSelect1 == 'minute' && timeSelect2 == 'millisecond') {
         let millisecond = mint2millisecond(timeValue);

         document.getElementById('timeout').value = millisecond;
      }

      else if (timeSelect1 == 'minute' && timeSelect2 == 'microsecond') {
         let microsecond = mint2microsecond(timeValue);

         document.getElementById('timeout').value = microsecond;
      }

      else if (timeSelect1 == 'minute' && timeSelect2 == 'nanosecond') {
         let nanosecond = mint2nanosecond(timeValue);

         document.getElementById('timeout').value = nanosecond;
      }

      else if (timeSelect1 == 'minute' && timeSelect2 == 'picosecond') {
         let picosecond = mint2picosecond(timeValue);

         document.getElementById('timeout').value = picosecond;
      }

      else if (timeSelect1 == 'minute' && timeSelect2 == 'hour') {
         let hour = mint2hour(timeValue);

         document.getElementById('timeout').value = hour;
      }

      else if (timeSelect1 == 'minute' && timeSelect2 == 'day') {
         let day = mint2day(timeValue);

         document.getElementById('timeout').value = day;
      }

      else if (timeSelect1 == 'minute' && timeSelect2 == 'week') {
         let week = mint2week(timeValue);

         document.getElementById('timeout').value = week;
      }

      else if (timeSelect1 == 'minute' && timeSelect2 == 'month') {
         let month = mint2month(timeValue);

         document.getElementById('timeout').value = month;
      }

      else if (timeSelect1 == 'minute' && timeSelect2 == 'year') {
         let year = mint2year(timeValue);

         document.getElementById('timeout').value = year;
      }

      else if (timeSelect1 == 'hour' && timeSelect2 == 'hour') {
         let hour = hour2hour(timeValue);

         document.getElementById('timeout').value = hour;
      }

      else if (timeSelect1 == 'hour' && timeSelect2 == 'second') {
         let second = hour2second(timeValue);

         document.getElementById('timeout').value = second;
      }

      else if (timeSelect1 == 'hour' && timeSelect2 == 'millisecond') {
         let millisecond = hour2millisecond(timeValue);

         document.getElementById('timeout').value = millisecond;
      }

      else if (timeSelect1 == 'hour' && timeSelect2 == 'microsecond') {
         let microsecond = hour2microsecond(timeValue);

         document.getElementById('timeout').value = microsecond;
      }

      else if (timeSelect1 == 'hour' && timeSelect2 == 'picosecond') {
         let picosecond = hour2picosecond(timeValue);

         document.getElementById('timeout').value = picosecond;
      }

      else if (timeSelect1 == 'hour' && timeSelect2 == 'nanosecond') {
         let nanosecond = hour2nanosecond(timeValue);

         document.getElementById('timeout').value = nanosecond;
      }

      else if (timeSelect1 == 'hour' && timeSelect2 == 'minute') {
         let mint = hour2mint(timeValue);

         document.getElementById('timeout').value = mint;
      }

      else if (timeSelect1 == 'hour' && timeSelect2 == 'day') {
         let day = hour2day(timeValue);

         document.getElementById('timeout').value = day;
      }

      else if (timeSelect1 == 'hour' && timeSelect2 == 'week') {
         let week = hour2week(timeValue);

         document.getElementById('timeout').value = week;
      }

      else if (timeSelect1 == 'hour' && timeSelect2 == 'month') {
         let month = hour2month(timeValue);

         document.getElementById('timeout').value = month;
      }

      else if (timeSelect1 == 'hour' && timeSelect2 == 'year') {
         let year = hour2year(timeValue);

         document.getElementById('timeout').value = year;
      }

      else if (timeSelect1 == 'day' && timeSelect2 == 'day') {
         let day = day2day(timeValue);

         document.getElementById('timeout').value = day;
      }

      else if (timeSelect1 == 'day' && timeSelect2 == 'second') {
         let second = day2second(timeValue);

         document.getElementById('timeout').value = second;
      }

      else if (timeSelect1 == 'day' && timeSelect2 == 'millisecond') {
         let millisecond = day2millisecond(timeValue);

         document.getElementById('timeout').value = millisecond;
      }

      else if (timeSelect1 == 'day' && timeSelect2 == 'microsecond') {
         let microsecond = day2microsecond(timeValue);

         document.getElementById('timeout').value = microsecond;
      }

      else if (timeSelect1 == 'day' && timeSelect2 == 'nanosecond') {
         let nanosecond = day2nanosecond(timeValue);

         document.getElementById('timeout').value = nanosecond;
      }

      else if (timeSelect1 == 'day' && timeSelect2 == 'picosecond') {
         let picosecond = day2picosecond(timeValue);

         document.getElementById('timeout').value = picosecond;
      }

      else if (timeSelect1 == 'day' && timeSelect2 == 'minute') {
         let mint = day2mint(timeValue);

         document.getElementById('timeout').value = mint;
      }

      else if (timeSelect1 == 'day' && timeSelect2 == 'hour') {
         let hour = day2hour(timeValue);

         document.getElementById('timeout').value = hour;
      }

      else if (timeSelect1 == 'day' && timeSelect2 == 'week') {
         let week = day2week(timeValue);

         document.getElementById('timeout').value = week;
      }

      else if (timeSelect1 == 'day' && timeSelect2 == 'month') {
         let month = day2month(timeValue);

         document.getElementById('timeout').value = month;
      }

      else if (timeSelect1 == 'day' && timeSelect2 == 'year') {
         let year = day2year(timeValue);

         document.getElementById('timeout').value = year;
      }

      else if (timeSelect1 == 'week' && timeSelect2 == 'week') {
         let week = week2week(timeValue);

         document.getElementById('timeout').value = week;
      }

      else if (timeSelect1 == 'week' && timeSelect2 == 'second') {
         let second = week2second(timeValue);

         document.getElementById('timeout').value = second;
      }

      else if (timeSelect1 == 'week' && timeSelect2 == 'millisecond') {
         let millisecond = week2millisecond(timeValue);

         document.getElementById('timeout').value = millisecond;
      }

      else if (timeSelect1 == 'week' && timeSelect2 == 'microsecond') {
         let microsecond = week2microsecond(timeValue);

         document.getElementById('timeout').value = microsecond;
      }

      else if (timeSelect1 == 'week' && timeSelect2 == 'nanosecond') {
         let nanosecond = week2nanosecond(timeValue);

         document.getElementById('timeout').value = nanosecond;
      }

      else if (timeSelect1 == 'week' && timeSelect2 == 'picosecond') {
         let picosecond = week2picosecond(timeValue);

         document.getElementById('timeout').value = picosecond;
      }

      else if (timeSelect1 == 'week' && timeSelect2 == 'minute') {
         let mint = week2mint(timeValue);

         document.getElementById('timeout').value = mint;
      }

      else if (timeSelect1 == 'week' && timeSelect2 == 'hour') {
         let hour = week2hour(timeValue);

         document.getElementById('timeout').value = hour;
      }

      else if (timeSelect1 == 'week' && timeSelect2 == 'day') {
         let day = week2day(timeValue);

         document.getElementById('timeout').value = day;
      }

      else if (timeSelect1 == 'week' && timeSelect2 == 'month') {
         let month = week2month(timeValue);

         document.getElementById('timeout').value = month;
      }

      else if (timeSelect1 == 'week' && timeSelect2 == 'year') {
         let year = week2year(timeValue);

         document.getElementById('timeout').value = year;
      }

      else if (timeSelect1 == 'month' && timeSelect2 == 'month') {
         let month = month2month(timeValue);

         document.getElementById('timeout').value = month;
      }

      else if (timeSelect1 == 'month' && timeSelect2 == 'second') {
         let second = month2second(timeValue);

         document.getElementById('timeout').value = second;
      }

      else if (timeSelect1 == 'month' && timeSelect2 == 'millisecond') {
         let millisecond = month2millisecond(timeValue);

         document.getElementById('timeout').value = millisecond;
      }

      else if (timeSelect1 == 'month' && timeSelect2 == 'microsecond') {
         let microsecond = month2microsecond(timeValue);

         document.getElementById('timeout').value = microsecond;
      }

      else if (timeSelect1 == 'month' && timeSelect2 == 'nanosecond') {
         let nanosecond = month2nanosecond(timeValue);

         document.getElementById('timeout').value = nanosecond;
      }

      else if (timeSelect1 == 'month' && timeSelect2 == 'picosecond') {
         let picosecond = month2picosecond(timeValue);

         document.getElementById('timeout').value = picosecond;
      }

      else if (timeSelect1 == 'month' && timeSelect2 == 'minute') {
         let mint = month2mint(timeValue);

         document.getElementById('timeout').value = mint;
      }

      else if (timeSelect1 == 'month' && timeSelect2 == 'hour') {
         let hour = month2hour(timeValue);

         document.getElementById('timeout').value = hour;
      }

      else if (timeSelect1 == 'month' && timeSelect2 == 'day') {
         let day = month2day(timeValue);

         document.getElementById('timeout').value = day;
      }

      else if (timeSelect1 == 'month' && timeSelect2 == 'week') {
         let week = month2week(timeValue);

         document.getElementById('timeout').value = week;
      }

      else if (timeSelect1 == 'month' && timeSelect2 == 'year') {
         let year = month2year(timeValue);

         document.getElementById('timeout').value = year;
      }

      else if (timeSelect1 == 'year' && timeSelect2 == 'year') {
         let year = year2year(timeValue);

         document.getElementById('timeout').value = year;
      }

      else if (timeSelect1 == 'year' && timeSelect2 == 'second') {
         let second = year2second(timeValue);

         document.getElementById('timeout').value = second;
      }

      else if (timeSelect1 == 'year' && timeSelect2 == 'millisecond') {
         let millisecond = year2millisecond(timeValue);

         document.getElementById('timeout').value = millisecond;
      }

      else if (timeSelect1 == 'year' && timeSelect2 == 'microsecond') {
         let microsecond = year2microsecond(timeValue);

         document.getElementById('timeout').value = microsecond;
      }

      else if (timeSelect1 == 'year' && timeSelect2 == 'nanosecond') {
         let nanosecond = year2nanosecond(timeValue);

         document.getElementById('timeout').value = nanosecond;
      }

      else if (timeSelect1 == 'year' && timeSelect2 == 'picosecond') {
         let picosecond = year2picosecond(timeValue);

         document.getElementById('timeout').value = picosecond;
      }

      else if (timeSelect1 == 'year' && timeSelect2 == 'minute') {
         let mint = year2mint(timeValue);

         document.getElementById('timeout').value = mint;
      }

      else if (timeSelect1 == 'year' && timeSelect2 == 'hour') {
         let hour = year2hour(timeValue);

         document.getElementById('timeout').value = hour;
      }

      else if (timeSelect1 == 'year' && timeSelect2 == 'day') {
         let day = year2day(timeValue);

         document.getElementById('timeout').value = day;
      }

      else if (timeSelect1 == 'year' && timeSelect2 == 'week') {
         let week = year2week(timeValue);

         document.getElementById('timeout').value = week;
      }

      else if (timeSelect1 == 'year' && timeSelect2 == 'month') {
         let month = year2month(timeValue);

         document.getElementById('timeout').value = month;
      }


   } else {
      error.innerText = 'Please provide a valid number!'
      document.getElementById('timeout').value = '';
   }

}


//timereset

function timereset () {
   document.getElementById('timev').value = '';
   document.getElementById('timeout').value = '';
}




//Meter2Km

function meter2km (meter) {
   let km = meter / 1000
   return km;
}
 

 //meter2cm

function meter2cm(meter) {
  centimeter = meter * 100
  return centimeter;
}



    //meter2millimeter 

function meter2millimeter(meter) {
  millimeter = meter * 1000
  return millimeter;
}


  //meter2micrometer

function meter2micrometer(meter) {
  micrometer = meter * 1000000
  return micrometer;
}


  //meter2nanometer

function meter2nanometer (meter) {
  nanometer = meter * 1000000000
  return nanometer;
}



 //meter2mile 

function meter2mile (meter) {
  mile = meter * 0.00062137
  return mile;
}


   //meter2yard

function meter2yard (meter) {
  yard = meter * 1.0936
  return yard;
}


  //meter2foot

function meter2foot (meter) {
  foot = meter * 3.28084
  return foot;
}



 //meter2inch

function meter2inch (meter) {
  inch = meter * 39.3701
  return inch;
}



//meter2lightyear

function meter2lightyear (meter) {
  lightyear = meter * 1.057000834E-16
  return lightyear;
}

//meter2meter

function meter2meter  (meter) {
   meter = meter
   return meter;
} 



  //kilometer2meter

function km2meter (kilometer) {
  meter = kilometer * 1000
  return meter;
}


//kilometer2kilometer


function km2kmeter (kilometer) {
   kilometer = kilometer
   return kilometer;
}



//kilometer2centimeter

function kilometer2centimeter (kilometer) {
  centimeter = kilometer * 100000
  return centimeter;
}



//kilometer2millimeter

function kilometer2millimeter (kilometer) {
  millimeter = kilometer * 1000000
  return millimeter;
}



//kilometer2micrometer

function kilometer2micrometer (kilometer) {
  micrometer = kilometer * 1000000000
  return micrometer;
}



//kilometer2nanometer

function kilometer2nanometer (kilometer) {
nanometer = kilometer * 1000000000000
return nanometer;
}


//kilometer2mile

function kilometer2mile (kilometer) {
mile = kilometer * 0.6213711922
return mile;
}



//kilometer2yard

function kilometer2yard (kilometer) {
yard = kilometer * 1093.6132983
return yard;
}



//kilometer2foot

function kilometer2foot (kilometer) {
foot = kilometer * 3280.839895
return foot;
}



//kilometer2inch

function kilometer2inch (kilometer) {
inch = kilometer * 39370.07874
return inch;
}



//kilometer2lightyear

function kilometer2lightyear (kilometer) {
lightyear = kilometer * 1.057000834E-13
return lightyear;
}


//cm2cm

function cm2centimter (centimer) {
   centimer = centimer
   return centimer
}


//centimeter2km

function centimeter2kilometer (centimer) {
kilometer = centimer * 0.00001
return kilometer;
}



//centimer2meter

function centimeter2meter (centimer) {
meter = centimer * 0.01
return meter;
}



//centimeter2millimeter

function centimeter2millimeter (centimer) {
millimeter = centimer * 10
return millimeter;
}


//centimeter2micrometer

function cm2micrometer (centimeter) {
   micrometer = centimeter * 10000
   return micrometer;
}


//centimeter2nanometer

function centimeter2nanometer (centimer) {
nanometer = centimer * 10000000
return nanometer;
}



//centimeter2mile

function centimeter2mile (centimer) {
mile = centimer * 0.0000062137
return mile;
}



//centimeter2yard

function centimeter2yard (centimer) {
yard = centimer * 0.010936133
return yard;
}



//centimeter2foot

function centimeter2foot (centimer) {
foot = centimer * 0.032808399
return foot;
}



//centimeter2inch 

function centimeter2inch (centimer) {
inch = centimer * 0.3937007874
return inch;
}



//centimeter2lightyear

function centimeter2lightyear (centimer) {
lightyear = centimer * 1.057000834E-18
return lightyear;
}

//millimeter2millimeter

function mlm2millimeter (millimeter) {
   millimeter = millimeter
   return millimeter;
}


  //millimeter2kilometer

function millimeter2kilometer (millimeter) {
kilometer = millimeter / 1000000
return kilometer;
}



//millimeter2meter

function millimeter2meter (millimeter) {
meter = millimeter / 1000
return meter;
}



//millimeter2centimter

function millimeter2centimeter (millimeter) {
centimeter = millimeter / 10
return centimeter;
}


//millimeter2micrometer

function millimeter2micrometer (millimeter) {
micrometer = millimeter * 1000
return micrometer;
}


//millimeter2nanometer

function millimeter2nanometer (millimeter) {
nanometer = millimeter * 1000000
return nanometer;
}



//millimeter2mile

function millimeter2mile (millimeter) {
mile = millimeter / 1609344
return mile;
}



//millimeter2yard

function millimeter2yard (millimeter) {
yard = millimeter / 914.4
return yard;
}



//millimeter2foot

function millimeter2foot (millimeter) {
foot = millimeter / 304.8
return foot;
}



//millimeter2inch

function millimeter2inch (millimeter) {
inch = millimeter / 25.4
return inch;
}



//millimeter2lightyear

function millimeter2lightyear (millimeter) {
lightyear = millimeter / 9.461e+18
return lightyear;
}


//micrometer2micrometer

function mcm2micrometer (micrometer) {
   micrometer = micrometer
   return micrometer;
}


  //micrometer2kilometer

function micrometer2kilometer (micrometer) {
kilometer = micrometer / 1000000000
return kilometer;
}


//micrometer2meter

function micrometer2meter (micrometer) {
meter = micrometer / 100000
return meter;
}



//micrometer2centimeter

function micrometer2centimeter (micrometer) {
centimeter = micrometer / 10000
return centimeter;
}



//micrometer2millimeter

function micrometer2millimeter (micrometer) {
millimeter = micrometer / 1000
return millimeter;
}



//micrometer2nanometer

function micrometer2nanometer (micrometer) {
nanometer = micrometer * 1000
return nanometer;
}



//micrometer2mile

function micrometer2mile (micrometer) {
mile = micrometer /  1609344000
return mile;
}



//micrometer2yard

function micrometer2yard (micrometer) {
yard = micrometer / 914400
return yard;
}



//micrometer2foot

function micrometer2foot (micrometer) {
foot = micrometer / 304800
return foot;
}



//micrometer2inch 

function micrometer2inch (micrometer) {
inch = micrometer / 25400
return inch;
}




//micrometer2lightyear

function micrometer2lightyear (micrometer) {
lightyear = micrometer / 9.461e+21
return lightyear;
}


//nanometer2nanometer

function nm2nanometer (nanometer) {
   nanometer = nanometer
   return nanometer;
}


//nanometer2meter

function nanometer2meter (nanometer) {
meter = nanometer / 1e+9
return meter;
}



//nanometer2kilometer

function nanometer2kilometer (nanometer) {
kilometer = nanometer / 1e+12
return kilometer;
}



//nanometertocentimeter

function nanometertocentimeter (nanometer) {
centimeter = nanometer / 1e+7
return centimeter;
}



//nanometer2millimeter

function nanometer2millimeter (nanometer) {
millimeter = nanometer / 1e+6
return millimeter;
}



//nanometer2micrometer

function nanometer2micrometer (nanometer) {
micrometer = nanometer / 1000
return micrometer;
}



//nanometer2mile

function nanometer2mile (nanometer) {
mile = nanometer / 1.609e+12
return mile;
}


//nanometer2yard 

function nanometer2yard (nanometer) {
yard = nanometer / 9.144e+8
return yard;
}


//nanometer2foot

function nanometer2foot (nanometer) {
foot = nanometer / 3.048e+8
return foot;
}



//nanometer2inch

function nanometer2inch (nanometer) {
inch = nanometer / 2.54e+7
return inch;
}



//nanometer2lightyear

function nanometer2lightyear (nanometer) {
lightyear = nanometer / 9.461e+24
return lightyear;
}


//mile2mile

function ml2mile  (mile) {
   mile = mile 
   return mile;
}



    //mile2meter 

function mile2meter (mile) {
meter = mile *  1609
return meter;
}



//mile2kilometer

function mile2kilometer (mile) {
kilometer = mile * 1.609
return kilometer;
}



//mile2centimeter

function mile2centimeter (mile) {
centimeter = mile * 160900
return centimeter;
}



//mile2millimeter

function mile2millimeter (mile) {
millimeter = mile * 1.609e+6
return millimeter;
}



//mile2micrometer

function mile2micrometer (mile) {
micrometer = mile * 1.609e+9
return micrometer;
}



//mile2nanometer

function mile2nanometer (mile) {
nanometer = mile * 1.609e+12
return nanometer;
}



//mile2yard

function mile2yard (mile) {
yard = mile * 1760
return yard;
}



//mile2foot 

function mile2foot (mile) {
foot = mile * 5280
return foot;
}



//mile2inch

function mile2inch (mile) {
inch = mile * 63360
return inch;
}



//mile2lightyear

function mile2lightyear (mile) {
lightyear = mile / 5.879e+12
return lightyear;
}


//yard2yard 

function yd2yard (yard) {
   yard = yard
   return yard;
}


 //yard2kilometer

function yard2kilometer (yard) {
kilometer = yard / 1094
return kilometer;
}



//yard2meter

function yard2meter (yard) {
meter = yard / 1.094
return meter;
}



//yard2centimeter

function yard2centimeter (yard) {
centimeter = yard * 91.44
return centimeter;
}



//yard2millimeter

function yard2millimeter (yard) {
millimeter = yard * 914.4
return millimeter;
}



//yard2micrometer

function yard2micrometer (yard) {
micrometer = yard * 914400
return micrometer;
}



//yard2nanometer

function yard2nanometer (yard) {
nanometer = yard * 9.144e+8
return nanometer;
}



//yard2mile

function yard2mile (yard) {
mile = yard / 1760
return mile;
}



//yard2foot

function yard2foot (yard) {
foot = yard * 3
return foot;
}



//yard2inch

function yard2inch (yard) {
inch = yard * 36
return inch;
}



//yard2lightyear

function yard2lightyear (yard) {
lightyear = yard / 1.035e+16
return lightyear;
}


//foot2foor

function ft2foot (foot) {
   foot = foot 
   return foot;
}


   //foot2kilometer

function foot2kilometer (foot) {
kilometer = foot / 3281
return kilometer;
}



//foot2meter

function foot2meter (foot) {
meter = foot / 3.281
return meter;
}




//foot2centimeter

function foot2centimeter (foot) {
centimeter = foot *  30.48
return centimeter;
}




//foot2millimeter

function foot2millimeter (foot) {
millimeter = foot * 304.8
return millimeter;
}




//foot2micrometer

function foot2micrometer (foot) {
micrometer = foot * 304800
return micrometer;
}




//foot2nanometer

function foot2nanometer (foot) {
nanometer = foot * 3.048e+8
return nanometer;
}




//foot2mile

function foot2mile (foot) {
mile = foot / 5280
return mile;
}




//foot2yard

function foot2yard (foot) {
yard = foot / 3
return yard;
}




//foot2inch

function foot2inch (foot) {
inch = foot * 12
return inch;
}




//foot2lightyear

function foot2lightyear (foot) {
lightyear = foot / 3.104e+16
return lightyear;
}


//inch2inch 

function inch2inch (inch) {
   inch = inch
   return inch;
}



//inch2kilometer

function inch2kilometer (inch) {
kilometer = inch / 39370
return kilometer;
}




//inch2meter

function inch2meter (inch) {
meter = inch / 39.37
return meter;
}




//inch2centimeter

function inch2centimeter (inch) {
centimeter = inch * 2.54
return centimeter;
}




//inch2millimeter

function inch2millimeter (inch) {
millimeter = inch * 25.4
return millimeter;
}




//inch2micrometer

function inch2micrometer (inch) {
micrometer = inch * 25400
return micrometer;
}




//inch2nanometer

function inch2nanometer (inch) {
nanometer = inch * 2.54e+7
return nanometer;
}



//inch2mile

function inch2mile (inch) {
mile = inch / 63360
return mile;
}




//inch2yard

function inch2yard (inch) {
yard = inch / 36
return yard;
}




//inch2foot

function inch2foot (inch) {
foot = inch / 12
return foot;
}




//inch2lightyear

function inch2lightyear (inch) {
lightyear = inch / 3.725e+17
return lightyear;
}


//lightyear2lightyear

function lightyear2lightyear (lightyear) {
   lightyear = lightyear
   return lightyear;
}



//lightyear2kilometer

function lightyear2kilometer (lightyear) {
kilometer = lightyear * 9.461e+12
return kilometer;
}




//lightyear2meter

function lightyear2meter (lightyear) {
meter = lightyear * 9.461e+15
return meter;
}



//lightyear2centimeter

function lightyear2centimeter (lightyear) {
centimeter = lightyear * 9.461e+17
return centimeter;
}



//lightyear2millimeter

function lightyear2millimeter (lightyear) {
millimeter = lightyear * 9.461e+18
return millimeter;
}




//lightyear2micrometer

function lightyear2micrometer (lightyear) {
micrometer = lightyear * 9.461e+21
return micrometer;
}




//lightyear2nanometer

function lightyear2nanometer (lightyear) {
nanometer = lightyear * 9.461e+24
return nanometer;
}




//lightyear2mile

function lightyear2mile (lightyear) {
mile = lightyear * 5.879e+1
return mile;
}




//lightyear2yard


function lightyear2yard (lightyear) {
yard = lightyear * 1.035e+16
return yard;
}




//lightyear2foot

function lightyear2foot (lightyear) {
foot = lightyear * 3.104e+16
return foot;
}




//lightyear2inch

function lightyear2inch (lightyear) {
inch = lightyear * 3.725e+17
return inch;
}


//celsius2celsius

function celsius2celsius(celsius) {
   celsius = celsius
   return celsius;
   
}






  //celsius2kelvin

function celsius2kelvin (celsius) {
   kelvin = celsius + 273.15
   return kelvin;
}



//celsius2fahrenheit

function celsius2fahrenheit (celsius) {
 fahrenheit = 9/5 * celsius + 32;
 return fahrenheit;
}


//kelvin2kelvin

function kelvin2kelvin (kelvin) {
   kelvin = kelvin
   return kelvin;
}



//kelvin2celsius

function kelvin2celsius (kelvin) {
celsius = kelvin - 273.15
return celsius;
}



//kelvin2fahrenheit

function kelvin2fahrenheit (kelvin) {
fahrenheit = (kelvin - 273.15 ) * 9/5 + 32
return fahrenheit;

}


//fahrenheit2fahrenheit

function fahrenheit2fahrenheit (fahrenheit) {
   fahrenheit = fahrenheit
   return fahrenheit;
}


//fahrenheit2celsius

function fahrenheit2celsius (fahrenheit) {
celsius = (fahrenheit - 32) * 5/9
return celsius;
}



//fahrenheit2kelvin

function fahrenheit2kelvin (fahrenheit) {
kelvin =  ( fahrenheit -32 ) * 5/9 + 273.15
return kelvin;
}


function sqm2sqmeter (squaremt) {
   squaremt = squaremt
   return squaremt;
}




   //squaremeter2squarekilometer


function sqmt2sqkm (squaremt) {
   squarekm = squaremt / 1e+6
   return squarekm;
}



//squaremeter2squaremillimeter

function sqmt2sqmm (squaremt) {
   squaremm = squaremt * 1e+6
   return squaremm;
}



//squaremeter2squarecentimeter

function sqmt2sqcm (squaremt) {
   squarecm = squaremt * 10000
   return squarecm;
}



//squaremeter2squaremicrometer

function sqmt2sqmcm(squaremt) {
   squaremcm = squaremt * 1e+12
   return squaremcm;
}



//squaremeter2hectare

function sqmt2sqhct (squaremt) {
   hectare = squaremt / 10000
   return hectare;
}



//squaremeter2squaremile

function sqmt2sqmile (squaremt) {
   squaremile = squaremt / 2.59e+6
   return squaremile;
}



//squaremeter2squareyard

function sqmt2sqyard (squaremt) {
   squareyd = squaremt * 1.196
   return squareyd;
}



//squaremeter2squarefoot

function sqmt2sqfoot (squaremt) {
   squareft = squaremt * 10.764
   return squareft;
}



//sqauremeter2squareinch

function sqmt2sqinch (squaremt) {
   squareinch = squaremt * 1550
   return squareinch;
}

//squaremeter2acre

function sqmt2acre (squaremt) {
   acre = squaremt / 4047
   return acre;
}
 

//squarekilometer2squarekilometer

function sqkm2sqkm (sqkilometer) {
   sqkilometer = sqkilometer 
   return sqkilometer;
}

  //squarekilometer2squaremeter

function sqkm2sqmt (squarekm) {
   squaremeter = squarekm * 1e+6
   return squaremeter;
}



//squarekilometer2squaremillimeter

function sqkm2sqmlm(squarekm) {
   squaremillimeter = squarekm * 1e+12
   return squaremillimeter;
}



//squarekilometer2squarecentimeter

function sqkm2sqcm (squarekm) {
   squarecm = squarekm * 1e+10
   return squarecm;
}



//squarekiloemeter2squaremicrometer

function sqkm2sqmcm(squarekm) {
   squaremcrometer = squarekm * 1e+18
   return squaremcrometer;
}



//squarekilometer2hectare

function sqkm2hectare (squarekm) {
   hectare = squarekm * 100
   return hectare;
}



//squarekilometer2squaremile

function sqkm2sqmile (squarekm) {
   squaremile = squarekm / 2.59
   return squaremile;
}



//squarekilometer2squareyard

function sqkm2sqyard (squarekm) {
   squareyard = squarekm * 1.196e+6
   return squareyard;
}



//squarekilometer2squarefoot

function sqkm2sqfoot (squarekm) {
   squarefoot = squarekm * 1.076e+7
   return squarefoot;
}



//squarekilometer2squareinch

function sqkm2sqinch (squarekm) {
   squareinch = squarekm * 1.076e+7
   return squareinch;
}

//squarekilometer2acre

function sqkm2acre (squarekm) {
   acre = squarekm *  247.1
   return acre;
}


//squaremillimeter2squaremillimeter

function sqmlm2squaremillimeter (squaremlm) {
   squaremlm = squaremlm
   return squaremlm;
}


  //squaremillimeter2squaremeter

function sqmlm2sqmeter (squaremlm) {
   squaremeter = squaremlm / 1e+6
   return squaremeter;
}



//squaremillimeter2squarekilometer

function sqmlm2sqkm (squaremlm) {
   squarekm = squaremlm / 1e+12
   return squarekm;
}



//squaremillimeter2squarecentimeter

function sqmlm2sqcm (squaremlm) {
   squarecm = squaremlm / 100
   return squarecm;
}



//squaremillimeter2squaremicrometer

function sqmlm2sqmcm (squaremlm) {
   squaremicrometer = squaremlm * 1e+6
   return squaremicrometer;
}



//squaremillimeter2hecatre

function sqmlm2hectare (squaremlm) {
   hectare = squaremlm / 1e+10
   return hectare;
}



//squaremillimeter2squaremile

function sqmlm2sqmile (squaremlm) {
   squaremile = squaremlm / 2.59e+12
   return squaremile;
}



//squaremillimeter2squareyard

function sqmlm2sqyard (squaremlm) {
   squareyard = squaremlm / 836100
   return squareyard;
}



//squaremillimeter2squarefoot

function sqmlm2sqfoot (squaremlm) {
   squarefoot = squaremlm / 92900
   return squarefoot;
}



//squaremillimeter2squareinch

function sqmlm2sqinch (squaremlm) {
   squareinch = squaremlm / 92900
   return squareinch;
}


//squaremillimeter2acre

function sqmlm2acre (squaremlm) {
   acre = squaremlm / 4.047e+9
   return acre;
}


 //squarecentimeter2squarecentimeter

function sqcm2sqcm (squarecm) {
   squarecm = squarecm
   return squarecm
}



//squarecentimeter2squaremeter

function sqcm2sqmeter (squarecm) {
   squaremeter = squarecm / 10000
   return squaremeter;
}



//squarecentimeter2squarekilometer

function sqcm2sqkm (squarecm) {
   squarekm = squarecm / 1e+10
   return squarekm;
}



//squarecentimeter2squaremillimeter

function sqcm2sqmlm (squarecm) {
   squaremillimeter = squarecm * 100
   return squaremillimeter;
}



//squarecentimeter2squaremicrometer

function sqcm2sqmcm (squarecm) {
   squaremicrometer = squarecm * 1e+8
   return squaremicrometer;
}



//squarecentimeter2hectare

function sqcm2hectare (squarecm) {
   hectare = squarecm / 1e+8
   return hectare;
}



//squarecentimeter2squaremile

function sqcm2sqmile (squarecm) {
   squaremile = squarecm / 2.59e+10
   return squaremile;
}



//squarecentimeter2squareyard

function sqcm2sqyard (squarecm) {
   squareyard = squarecm / 8361
   return squareyard;
}



//squarecentimeter2squarefoot

function sqcm2sqfoot (squarecm) {
   squarefoot = squarecm / 929
   return squarefoot;
}



//squarecentimeter2squareinch

function sqcm2sqinch (squarecm) {
   squareinch = squarecm / 6.452
   return squareinch;
}


//squarecentimeter2acre

function sqcm2acre (squarecm) {
   acre = squarecm / 4.047e+7
   return acre;
}


   //squaremicrometer2squaremicrometer

function sqmcm2sqmcm (squaremicrometer) {
   squaremicrometer = squaremicrometer
   return squaremicrometer;
}


//squaremicrometer2squaremeter

function sqmcm2sqmeter (squaremicrometer) {
   squaremeter = squaremicrometer / 1e+12
   return squaremeter;
}



//squaremicrometer2squarekilometer

function sqmcm2sqkm (squaremicrometer) {
   squarekm = squaremicrometer / 1e+18
   return squarekm;
}



//squaremicrometer2squaremillimeter

function sqmcm2sqmlm (squaremicrometer) {
   squaremillimeter = squaremicrometer / 1e+6
   return squaremillimeter;
}



//sqauremicrometer2squarecentimeter

function sqmcm2sqcm (squaremicrometer) {
   squarecm = squaremicrometer / 1e+8
   return squarecm;
}



//squaremicrometer2hectare

function sqmcm2hectare (squaremicrometer) {
   hectare = squaremicrometer / 1e+16
   return hectare;
}


//squaremicrometer2squaremile

function sqmcm2sqmile (squaremicrometer) {
   squaremile = squaremicrometer / 2.59e+18
   return squaremile;
}



//squaremicrometer2squareyard

function sqmcm2sqyard (squaremicrometer) {
   squareyard = squaremicrometer / 8.361e+11
   return squareyard;
}



//squaremicrometer2squarefoot

function sqmcm2sqfoot (squaremicrometer) {
   squarefoot = squaremicrometer / 9.29e+10
   return squarefoot;
}



//squaremicrometer2squareinch

function sqmcm2sqinch (squaremicrometer) {
   squareinch = squaremicrometer / 6.452e+8
   return squareinch;
}


//squaremicrometer2acre

function sqmcm2acre (squaremicrometer) {
   acre = squaremicrometer / 4.047e+15
   return acre;
}


//hectare2hectare

function hectare2hectare (hectare) {
   hectare = hectare 
   return hectare;
}


//hectare2squaremeter

function hectare2squaremeter (hectare) {
   squaremeter = hectare * 10000
   return squaremeter;
}



//hectare2squarekilometer

function hectare2sqkm (hectare) {
   squarekm = hectare / 100
   return squarekm;
}



//hectare2squaremillimeter

function hectare2sqmlm (hectare) {
   squaremlm = hectare * 1e+10
   return squaremlm;
}



//hectare2squarecentimeter

function hectare2sqcm (hectare) {
   squarecm = hectare * 1e+8
   return squarecm;
}



//hectare2squaremicrometer

function hectare2sqmcm (hectare) {
   squaremcm = hectare * 1e+16
   return squaremcm;
}



//hectare2squaremile

function hectare2squaremile (hectare) {
   squaremile = hectare / 259
   return squaremile;
}



//hectare2squareyard

function hectare2squareyard (hecatre) {
   squareyard = hecatre * 11960
   return squareyard;
}



//hectare2squarefoot

function hectare2squarefoot (hectare) {
   squarefoot = hectare * 107600
   return squarefoot;
}



//hectare2squareinch

function hectare2squareinch (hecatre) {
   squareinch = hecatre * 1.55e+7
   return squareinch;
}


//hectare2acre 

function hectare2acre (hectare) {
   acre = hectare * 2.471
   return acre;
}


//squaremile2squaremile

function sqmile2sqmile (sqmile) {
   sqmile = sqmile
   return sqmile;
}





//squaremile2squaremeter

function sqmile2sqmeter (sqmile) {
   sqmeter = sqmile * 2.59e+6
   return sqmeter;
}

//squaremile2squarekilometer

function sqmile2sqkm (sqmile) {
   sqkm = sqmile * 2.59
   return sqkm;
}

//squaremile2squaremillimeter

function sqmile2sqmlm (sqmile) {
   sqmlm = sqmile * 2.59e+12
   return sqmlm;
}

//squaremile2squarecentimeter

function sqmile2sqcm (sqmile) {
   sqcm = sqmile * 2.59e+10
   return sqcm;
}

//squaremile2squaremicrometer

function sqmile2sqmcm (sqmile) {
   sqmcm = sqmile * 2.59e+18
   return sqmcm;
}

//squaremile2hecatre

function sqmile2hectare (sqmile) {
   hectare = sqmile * 259
   return hectare;
}

//squaremile2squareyard

function sqmile2sqyard (sqmile) {
   sqyard = sqmile * 3.0983+6
   return sqyard;
}

//squaremile2squarefoot

function sqmile2sqfoot(sqmile) {
   sqfoot = sqmile * 2.788e+7
   return sqfoot;
}

//squaremile2squareinch 

function sqmile2sqinch (sqmile) {
   sqinch = sqmile * 4.014e+9
   return sqinch;
}

//squaremile2acre

function sqmile2acre (sqmile) {
   acre = sqmile * 640
   return acre;
}


//squareyard2squareyard

function sqyard2sqyard (sqyard) {
   sqyard = sqyard
   return sqyard;
}

//squareyard2squaremeter

function sqyard2sqmeter (sqyard) {
   sqmeter = sqyard / 1.196
   return sqmeter;
}

//squareyard2squarekilometer

function sqyard2sqkm (sqyard) {
   sqkm = sqyard / 1.196e+6
   return sqkm;
}

//squareyard2squaremillimeter

function sqyard2sqmlm (sqyard) {
   sqmlm = sqyard * 836100
   return sqmlm;
}

//squareyard2squarecentimeter

function sqyard2sqcm (sqyard) {
   sqcm = sqyard * 8361
   return sqcm;
}

//squareyard2squaremicrometer

function sqyard2sqmcm (sqyard) {
   sqmcm = sqyard * 8.361e+11
   return sqmcm;
}

//squareyard2hectare

function sqyard2hectare (sqyard) {
   hectare = sqyard / 11960
   return hectare;
}

//squareyard2squaremile

function sqyard2sqmile (sqyard) {
   sqmile = sqyard / 3.098e+6
   return sqmile;
}

//squareyard2squarefoot

function sqyard2sqfoot (sqyard) {
   sqfoot = sqyard * 9
   return sqfoot;
}

//squareyard2squareinch 

function sqyard2sqinch (sqyard) {
   sqinch = sqyard * 1296
   return sqinch;
}

//squareyard2acre

function sqyard2acre (sqyard) {
   acre = sqyard / 4848
   return acre;
}

//squarefoot2squarefoot

function sqfoot2sqfoot (sqfoot) {
   sqfoot = sqfoot
   return sqfoot;
}

//squarefoot2squaremeter

function sqfoot2sqmeter (sqfoot) {
   sqmeter = sqfoot / 10.764
   return sqmeter;
}

//squarefoot2squarekilometer

function sqft2sqkm (sqfoot) {
   sqkm = sqfoot / 1.076e+7
   return sqkm;
}

//squarefoot2squaremillimeter

function sqft2sqmlm (sqfoot) {
   sqmlm = sqfoot * 92900
   return sqmlm;
}

//squarefoot2squarecentimeter

function sqft2sqcm (sqfoot) {
   sqcm = sqfoot * 929
   return sqcm;
}

//squarefoot2squaremicrometer

function sqft2sqmcm (sqfoot) {
   sqmcm = sqfoot * 9.29e+10
   return sqmcm;
}

//squarefoot2hectare

function sqft2hectare (sqfoot) {
   hectare = sqfoot / 107600
   return hectare;
}

//squarefoot2squaremile

function sqft2sqmile (sqfoot) {
   sqmile = sqfoot / 2.788e+7
   return sqmile;
}

//squarefoot2squareyard 

function sqft2sqyard (sqfoot) {
   sqyard = sqfoot / 9
   return sqyard;
}

//squarefoot2squareinch 

function sqft2sqinch (sqfoot) {
   sqinch = sqfoot * 144
   return sqinch;
}

//squarefoot2acre

function sqft2acre (sqfoot) {
   acre = sqfoot / 43560
   return acre;
} 


//squareinch2squareinch 

function sqinch2sqinch (sqinch) {
   sqinch = sqinch
   return sqinch;
}

//squareinch2squaremeter

function sqinch2sqmeter (sqinch) {
   sqmeter = sqinch / 1550
   return sqmeter;
}


//squareinch2squarekilometer

function sqinch2sqkm (sqinch) {
   sqkm = sqinch / 1.55e+9
   return sqkm;
}

//squareinch2squaremillimeter

function sqinch2sqmlm (sqinch) {
   sqmlm = sqinch * 645.2
   return sqmlm;
}

//squareinch2squarecentimeter

function sqinch2sqcm (sqinch) {
   sqcm = sqinch * 6.452
   return sqcm;
}

//squareinch2squaremicrometer

function sqinch2sqmcm (sqinch) {
   sqmcm = sqinch * 6.452e+8
   return sqmcm;
}

//squareinch2hectare

function sqinch2hectare (sqinch) {
   hectare = sqinch / 1.55e+7
   return hectare;
}

//squareinch2squaremile 

function sqinch2sqmile (sqinch) {
   sqmile = sqinch / 4.014e+9
   return sqmile;
}

//squareinch2squareyard 

function sqinch2sqyard (sqinch) {
   sqyard = sqinch / 1296
   return sqyard;
}

//squareinch2squarefoot

function sqinch2sqfoot (sqinch) {
   sqfoot = sqinch / 144
   return sqfoot;
}

//squareinch2acre

function sqinch2acre (sqinch) {
   acre = sqinch / 6.273e+6
   return acre;
}


//acre2acre

function acre2acre (acre) {
   acre = acre
   return acre;
}

//acre2squaremeter

function acre2sqmeter (acre) {
   sqmeter = acre * 4047
   return sqmeter;
}

//acre2squarekilometer

function acre2sqkm (acre) {
   sqkm = acre / 247.1
   return sqkm;
}

//acre2squaremilimeter

function acre2sqmlm (acre) {
   sqmlm = acre * 4.047e+9
   return sqmlm;
}

//acre2squarecentimeter

function acre2sqcm (acre) {
   sqcm = acre * 4.047e+7
   return sqcm;
}

//acre2squaremicrometer

function acre2sqmcm (acre) {
   sqmcm = acre * 4.047e+15
   return sqmcm;
}

//acre2hectare

function acre2hectare (acre) {
   hectare = acre / 2.471
   return hectare;
}

//acre2squaremile

function acre2sqmile (acre) {
   sqmile = acre / 640
   return sqmile;
}

//acre2squareyard 

function acre2sqyard (acre) {
   sqyard = acre * 4840
   return sqyard;
}

//acre2squarefoot

function acre2sqfoot (acre) {
   sqfoot = acre * 43560
   return sqfoot;
}

//acre2squareinch 

function acre2sqinch (acre) {
   sqinch = acre * 6.273e+6
   return sqinch;
}

//Volume

//cubicmeter2cubicmeter

function cbmeter2cbmeter (cubicmeter) {
   cubicmeter = cubicmeter
   return cubicmeter;
}

//cubicmeter2cubickilometer

function cbmeter2cbkm (cubicmeter) {
   cubickm = cubicmeter / 1e+9
   return cubickm;
}

//cubicmeter2cubiccentimeter

function cbmeter2cbcm (cubicmeter) {
   cubiccm = cubicmeter * 1e+6
   return cubiccm;
}

//cubicmeter2cubicmillimeter

function cbmeter2cbmlm (cubicmeter) {
   cubicmlm = cubicmeter * 1e+9
   return cubicmlm;
}

//cubicmeter2liter

function cubicmeter2liter (cubicmeter) {
   liter = cubicmeter * 1000
   return liter;
}

//cubicmeter2milliliter

function cubicmeter2milliliter (cubicmeter) {
   milliliter = cubicmeter * 1e+6
   return milliliter;
}

//cubicmeter2usgallon

function cubicmeter2usgallon (cubicmeter) {
   usgallon = cubicmeter * 264.2
   return usgallon;
}

//cubicmeter2usquart

function cubicmeter2usquart (cubicmeter) {
   usquart = cubicmeter * 1057
   return usquart;
}

//cubicmeter2uspint

function cubicmeter2uspint (cubicmeter) {
   uspint = cubicmeter * 2113
   return uspint;
}

//cubicmeter2uscup

function cubicmeter2uscup (cubicmeter) {
   uscup = cubicmeter * 4227
   return uscup;
}

//cubicmeter2usfluidounce 

function cubicmeter2usfluidounce (cubicmeter) {
   fluidounce = cubicmeter * 33810
   return fluidounce;
}

//cubicmeter2ustablespoon

function cubicmeter2ustablespoon (cubicmeter) {
   tablespoon = cubicmeter * 67630
   return tablespoon;
}

//cubicmeter2usteaspoon

function cubicmeter2usteaspoon (cubicmeter) {
   teaspoon = cubicmeter * 202900
   return teaspoon;
}

//cubicmeter2imperialgallon

function cubicmeter2imperialgallon (cubicmeter) {
   imperialgallon = cubicmeter * 220
   return imperialgallon;
}

//cubicmeter2imperialquart

function cubicmeter2imperialquart (cubicmeter) {
   imperialquart = cubicmeter * 879.9
   return imperialquart;
}

//cubicmeter2imperialpint

function cubicmeter2imperialpint (cubicmeter) {
   imperialpint = cubicmeter * 1760
   return imperialpint;
}

//cubicmeter2imperialfluidounce 

function cubicmeter2imperialfluidounce (cubicmeter) {
   impfluidounce = cubicmeter * 35200
   return impfluidounce;
}

//cubicmeter2imperialtablespoon

function cubicmeter2imperialtablespoon (cubicmeter) {
   imptablespoon = cubicmeter *  56310
   return imptablespoon;
}

//cubicmeter2imperialteaspoon

function cubicmeter2imperialteaspoon (cubicmeter) {
   impteaspoon = cubicmeter * 168900
   return impteaspoon;
}

//cubicmeter2cubicmile

function cubicmeter2cubicmile (cubicmeter) {
   cubicmile = cubicmeter / 4.168e+9
   return cubicmile;
}

//cubicmeter2cubicyard

function cubicmeter2cubicyard (cubicmeter) {
   cubicyard = cubicmeter * 1.308
   return cubicyard;
}

//cubicmeter2cubicfoot 

function cubicmeter2cubicfoot (cubicmeter) {
   cubicfoot = cubicmeter *  35.315
   return cubicfoot;
}

//cubicmeter2cubicinch 

function cubicmeter2cubicinch (cubicmeter) {
   cubicinch = cubicmeter *  61020
   return cubicinch;
}

//cubickm2cubickm

function cubickm2cubickm (cubickm) {
   cubickm = cubickm
   return cubickm;
}

//cbkm2cbmeter

function cbkm2cbmeter (cubickm) {
   cbmeter = cubickm * 1e+9
   return cbmeter;
}

//cubickm2cubiccentimeter

function cbkm2cbcm (cubickm) {
   cubiccm = cubickm * 1e+15
   return cubiccm;
}

//cubickm2cubicmillimeter

function cbkm2cbmlm (cubickm) {
   cubicmlm = cubickm * 1e+18
   return cubicmlm;
}

//cubickm2liter

function cbkm2liter (cubickm) {
   liter = cubickm * 1e+12
   return liter;
}

//cubickm2milliliter

function cubickm2milliliter (cubickm) {
   milliliter = cubickm * 1e+15
   return milliliter;
}

//cubickm2usgallon

function cbkm2usgallon (cubickm) {
   usgallon = cubickm *  2.642e+11
   return usgallon;
}

//cubickm2usquart

function cubickm2usquart (cubickm) {
   usquart = cubickm * 1.057e+12
   return usquart;
}

//cubickm2uspint

function cubickm2uspint (cubickm) {
   uspint = cubickm * 2.113e+12
   return uspint;
}

//cubickm2uscup

function cbkm2uscup (cubickm) {
   uscup = cubickm / 4.227e+12
   return uscup;
}

//cubickm2usfluidounce

function cubickm2usfluidounce (cubickm) {
   usfluidounce = cubickm *  3.381e+13
   return usfluidounce;
}

//cubickm2ustablespoon 

function cubickm2ustablespoon (cubickm) {
   tablespoon = cubickm * 6.763e+13
   return tablespoon;
}

//cubickm2usteaspoon

function cubickm2usteaspoon (cubickm) {
   usteaspoon = cubickm * 2.029e+14
   return usteaspoon;
}

//cubickm2imperialgallon

function cubickm2imperialgallon (cubickm) {
   imperialgallon = cubickm * 2.2e+11
   return imperialgallon;
}

//cubickm2imperialquart 

function cubickm2imperialquart (cubickm) {
   imperialquart = cubickm * 8.799e+11
   return imperialquart;
}

//cubickm2imperialpint

function cubickm2imperialpint (cubickm) {
   imperialpint = cubickm * 1.76e+12
   return imperialpint;
}

//cubickm2imperialfluidounce

function cubickm2imperialfluidounce (cubickm) {
   impfluidounce = cubickm * 3.52e+13
   return impfluidounce;
}

//cubickm2imperialtablespoon

function cubickm2imperialtablespoon (cubickm) {
   imptablespoon = cubickm * 5.631e+13
   return imptablespoon;
}

//cubickm2imperialteaspoon

function cubickm2imperialteaspoon (cubickm) {
   impteaspoon = cubickm * 1.689e+14
   return impteaspoon;
}

//cubickm2cubicmile

function cubickm2cubicmile (cubickm) {
   cubicmile = cubickm / 4.168
   return cubicmile;
}

//cubickm2cubicyard

function cubickm2cubicyard (cubickm) {
   cubicyard = cubickm * 1.308e+9
   return cubicyard;
}

//cubickm2cubicfoot

function cubickm2cubicfoot (cubickm) {
   cubicfoot = cubickm * 3.531e+10
   return cubicfoot;
}

//cubickm2cubicinch

function cubickm2cubicinch (cubickm) {
   cubicinch = cubickm * 6.102e+13
   return cubicinch;
}

//cubiccm2cubiccm

function cubiccm2cubiccm (cubiccm) {
   cubiccm = cubiccm
   return cubiccm;
}

//cubiccm2cubicmeter

function cubicm2cubicmeter (cubiccm) {
   cubicmeter = cubiccm / 1e+6
   return cubicmeter;
}

//cubiccm2cubickm

function cubiccm2cubickm (cubiccm) {
   cubickm = cubiccm / 1e+15
   return cubickm;
}

//cubiccm2cubicmlm

function cubiccm2cubicmlm (cubiccm) {
   cubicmlm = cubiccm * 1000
   return cubicmlm;
}

//cubiccm2liter

function cubiccm2liter (cubiccm) {
   liter = cubiccm / 1000
   return liter;
}

//cubiccm2milliliter

function cubiccm2milliliter (cubiccm) {
   milliliter = cubiccm * 1
   return milliliter;
}

//cubiccm2usgallon

function cubiccm2usgallon (cubiccm) {
   usgallon = cubiccm / 3785
   return usgallon;
}

//cubiccm2usquart

function cubiccm2usquart (cubiccm) {
   usquart = cubiccm / 946.4
   return usquart;
}

//cubiccm2uspint

function cubiccm2uspint (cubiccm) {
   uspint = cubiccm / 473.2
   return uspint;
}

//cubiccm2uscup

function cubiccm2uscup (cubiccm) {
   uscup = cubiccm * 236.6
   return uscup
}

//cubiccm2usfluidounce

function cubiccm2usfluidounce (cubiccm) {
   usfluidounce = cubiccm / 29.574
   return usfluidounce;
}

//cubiccm2ustablespoon

function cubiccm2ustablespoon (cubiccm) {
   tablespoon = cubiccm / 14.787
   return tablespoon;
}

//cubiccm2usteaspoon

function cubiccm2usteaspoon (cubiccm) {
   teaspoon = cubiccm / 4.929
   return teaspoon;
}

//cubiccm2imperialgallon

function cubiccm2imperialgallon (cubiccm) {
   imperialgallon = cubiccm * 4546
   return imperialgallon;
}

//cubiccm2imperialquart

function cubiccm2imperialquart (cubiccm) {
   imperialquart = cubiccm / 1137
   return imperialquart;
}

//cubiccm2imperialpint

function cubiccm2imperialpint (cubiccm) {
   imperialpint = cubiccm / 568.3
   return imperialpint;
}

//cubiccm2imperialfluidounce

function cubiccm2imperialfluidounce (cubiccm) {
   fluidounce = cubiccm / 28.413
   return fluidounce;
}

//cubiccm2imperialtablespoon

function cubiccm2imperialtablespoon (cubiccm) {
   imptablespoon = cubiccm / 7.758
   return imptablespoon;
}

//cubiccm2imperialteaspoon

function cubiccm2imperialteaspoon (cubiccm) {
   impteaspoon = cubiccm / 5.919
   return impteaspoon;
}

//cubiccm2cubicmile

function cubiccm2cubicmile (cubiccm) {
   cubicmile = cubiccm / 4.168e+15
   return cubicmile;
}

//cubiccm2cubicyard

function cubiccm2cubicyard (cubiccm) {
   cubicyard = cubiccm / 764600
   return cubicyard;
}

//cubiccm2cubicfoot

function cubiccm2cubicfoot (cubiccm) {
   cubicfoot = cubiccm / 28320
   return cubicfoot;
}

//cubiccm2cubicinch

function cubiccm2cubicinch (cubiccm) {
   cubicinch = cubiccm / 6.387
   return cubicinch;
}

//cubicmlm2cubicmlm

function cubicmlm2cubicmlm (cubicmlm) {
   cubicmlm = cubicmlm 
   return cubicmlm;
}

//cubicmlm2cubicmeter

function cubicmlm2cubicmeter (cubicmlm) {
   cubicmeter = cubicmlm / 1e+9
   return cubicmeter;
}

//cubicmlm2cubickm

function cubicmlm2cubickm (cubicmlm) {
   cubickm = cubicmlm / 1e+18
   return cubickm;
}

//cubicmlm2cubiccm

function cubicmlm2cubiccm (cubicmlm) {
   cubiccm = cubicmlm / 1000
   return cubiccm;
}

//cubicmlm2liter

function cubicmlm2liter (cubicmlm) {
   liter = cubicmlm / 1e+6
   return liter;
}

//cubicmlm2milliliter

function cubicmlm2milliliter (cubicmlm) {
   milliliter = cubicmlm / 1000
   return milliliter;
}

//cubicmlm2usgallon

function cubicmlm2usgallon (cubicmlm) {
   usgallon = cubicmlm / 3.785e+6
   return usgallon;
}

//cubicmlm2usquart

function cubicmlm2usquart (cubicmlm) {
   usquart = cubicmlm / 946400
   return usquart;
}

//cubicmlm2uspint

function cubicmlm2uspint (cubicmlm) {
   uspint = cubicmlm / 473200
   return uspint;
}

//cubicmlm2uscup

function cubicmlm2uscup (cubicmlm) {
   uscup = cubicmlm / 236600
   return uscup;
}

//cubicmlm2usfluidounce

function cubicmlm2usfluidounce (cubicmlm) {
   fluidounce = cubicmlm / 29570
   return fluidounce;
}

//cubicmlm2ustablespoon

function cubicmlm2ustablespoon (cubicmlm) {
   tablespoon = cubicmlm / 14790
   return tablespoon;
}

//cubicmlm2usteaspoon

function cubicmlm2usteaspoon (cubicmlm) {
   teaspoon = cubicmlm / 4929
   return teaspoon;
}

//cubicmlm2imperialgallon

function cubicmlm2imperialgallon (cubicmlm) {
   imperialgallon = cubicmlm / .546e+6
   return imperialgallon;
}

//cubicmlm2imperialquart

function cubicmlm2imperialquart (cubicmlm) {
   imperialquart = cubicmlm / 1.137e+6
   return imperialquart;
}

//cubicmlm2imperialpint

function cubicmlm2imperialpint (cubicmlm) {
   imperialpint = cubicmlm / 68300
   return imperialpint;
}

//cubicmlm2impfluidounce

function cubicmlm2impfluidounce (cubicmlm) {
   fluidounce = cubicmlm / 28410
   return fluidounce;
}

//cubicmlm2imptablespoon

function cubicmlm2imptablespoon (cubicmlm) {
   imptablespoon = cubicmlm / 17760
   return imptablespoon;
}

//cubicmlm2impteaspoon

function cubicmlm2impteaspoon (cubicmlm) {
   impteaspoon = cubicmlm / 5919
   return impteaspoon;
}

//cubicmlm2cubicmile

function cubicmlm2cubicmile (cubicmlm) {
   cubicmile = cubicmlm / 4.168e+18
   return cubicmile;
}

//cubicmlm2cubicyard

function cubicmlm2cubicyard (cubicmlm) {
   cubicyard = cubicmlm / 7.646e+8
   return cubicyard;
}

//cubicmlm2cubicfoot

function cubicmlm2cubicfoot (cubicmlm) {
   cubicfoot = cubicmlm / 2.832e+7
   return cubicfoot;
}

//cubicmlm2cubicinch

function cubicmlm2cubicinch (cubicmlm) {
   cubicinch = cubicmlm / 16390
   return cubicinch;
}

//liter2liter

function liter2liter (liter) {
   liter = liter 
   return liter;
}

//liter2cubicmeter

function liter2cubicmeter (liter) {
   cbmeter = liter / 1000
   return cbmeter;
}

//liter2cubickm

function liter2cubickm (liter) {
   cbkm = liter / 1e+12
   return cbkm;
}

//liter2cubiccm

function liter2cubiccm (liter) {
   cubiccm = liter * 1000
   return cubiccm;
}

//liter2cubicmillimeter

function liter2cubicmillimeter (liter) {
   cbmillimeter = liter / 1e+6
   return cbmillimeter;
}

//liter2milliliter

function liter2milliliter (liter) {
   milliliter = liter * 1000
   return milliliter;
}

//liter2usgallon

function liter2usgallon (liter) {
   usgallon = liter / 3.785
   return usgallon;
}

//liter2usquart

function liter2usquart (liter) {
   usquart = liter * 1.057
   return usquart;
}

//liter2uspint

function liter2uspint (liter) {
   uspint = liter * 2.113
   return uspint;
}

//liter2uscup

function liter2uscup (liter) {
   uscup = liter * 4.227
   return uscup;
}

//liter2usfluidounce

function liter2usfluidounce (liter) {
   fluidounce = liter * 33.814
   return fluidounce;
}

//liter2ustablespoon

function liter2ustablespoon (liter) {
   tablespoon = liter * 67.628
   return tablespoon;
}

//liter2usteaspoon

function liter2usteaspoon (liter) {
   teaspoon = liter * 202.9
   return teaspoon;
}

//liter2impgallon

function liter2impgallon (liter) {
   imperialgallon = liter / 4.546
   return imperialgallon;
}

//liter2impquart

function liter2impquart (liter) {
   imperialquart = liter / 1.136
   return imperialquart;
}

//liter2imperialpint

function liter2imperialpint (liter) {
   imperialpint = liter * 1.76
   return imperialpint;
}

//liter2impfluidounce

function liter2impfluidounce (liter) {
   fluidounce = liter * 35.195
   return fluidounce;
}

//liter2imptablespoon

function liter2imptablespoon (liter) {
   tablespoon = liter * 56.312
   return tablespoon;
}

//liter2impteaspoon

function liter2impteaspoon (liter) {
   teaspoon = liter * 168.9
   return teaspoon;
}

//liter2cubicmile

function liter2cubicmile (liter) {
   cbmile = liter / 4.168e+12
   return cbmile;
}

//liter2cubicyard

function liter2cubicyard (liter) {
   cbyard = liter / 764.6
   return cbyard;
}

//liter2cubicfoot

function liter2cubicfoot (liter) {
   cbfoot = liter / 28.317
   return cbfoot;
}

//liter2cubicinch

function liter2cubicinch (liter) {
   cbinch = liter * 61.024
   return cbinch;
}

//milliliter2milliliter

function milliliter2milliliter (milliliter) {
   milliliter = milliliter 
   return milliliter;
}

//milliliter2cbmeter

function milliliter2cbmeter (milliliter) {
   cbmeter = milliliter / 1e+6
   return cbmeter;
}

//milliliter2cbkm

function milliliter2cbkm (milliliter) {
   cbkm = milliliter / 1e+15
   return cbkm;
}

//milliliter2cbcm

function milliliter2cbcm (milliliter) {
   cbcm = milliliter * 1
   return cbcm;
}

//milliliter2cbmillimeter

function milliliter2cbmillimeter (milliliter) {
   cbmillimeter = milliliter * 1000
   return cbmillimeter;
}

//milliliter2liter

function milliliter2liter (milliliter) {
   liter = milliliter / 1000
   return liter;
}

//milliliter2usgallon

function milliliter2usgallon (milliliter) {
   usgallon = milliliter / 3785
   return usgallon;
}

//milliliter2usquart

function milliliter2usquart (milliliter) {
   usquart = milliliter / 946.4
   return usquart;
}

//milliliter2uspint 

function milliliter2uspint (milliliter) {
   uspint = milliliter / 473.2
   return uspint;
}

//milliliter2uscup

function milliliter2uscup (milliliter) {
   uscup = milliliter / 236.6
   return uscup;
}

//milliliter2usfluidounce

function milliliter2usfluidounce (milliliter) {
   fluidounce = milliliter /  29.574
   return fluidounce;
}

//milliliter2ustablespoon

function milliliter2ustablespoon (milliliter) {
   tablespoon = milliliter / 14.787
   return tablespoon;
}

//milliliter2usteaspoon

function milliliter2usteaspoon (milliliter) {
   teaspoon = milliliter / 4.929
   return teaspoon;
}

//milliliter2impgallon

function milliliter2impgallon (milliliter) {
   imperialgallon = milliliter / 4546
   return imperialgallon;
}

//milliliter2impquart

function milliliter2impquart (milliliter) {
   imperialquart = milliliter * 1000
   return imperialquart
}

//milliliter2imperialpint

function milliliter2imperialpint (milliliter) {
   imperialpint = milliliter / 568.3
   return imperialpint;
}

//milliliter2impfluidounce

function milliliter2impfluidounce (milliliter) {
   impfluidounce = milliliter / 28.413
   return impfluidounce;
}

//milliliter2imptablespoon

function milliliter2imptablespoon (milliliter) {
   tablespoon = milliliter / 17.758
   return tablespoon;
}

//milliliter2impteaspoon

function milliliter2impteaspoon (milliliter) {
   impteaspoon = milliliter / 5.919
   return impteaspoon;
}

//milliliter2cubicmile

function milliliter2cubicmile (milliliter) {
   cbmile = milliliter /  4.168e+15
   return cbmile;
}

//milliliter2cubicyard

function milliliter2cubicyard (milliliter) {
   cbyard = milliliter / 764600
   return cbyard;
}

//milliliter2cubicfoot

function milliliter2cubicfoot (milliliter) {
   cbfoot = milliliter / 28320
   return cbfoot;
}

//milliliter2cubicinch

function milliliter2cubicinch (milliliter) {
   cbinch = milliliter / 16.387
   return cbinch;
}

//usgallon2usgallon

function usgallon2usgallon (usgallon) {
   usgallon = usgallon
   return usgallon;
}

//usgallon2cbmeter

function usgallon2cbmeter (usgallon) {
   cbmeter = usgallon / 264.2
   return cbmeter
}

//usgallon2cbkm

function usgallon2cbkm (usgallon) {
   cbkm = usgallon / 2.642e+11
   return cbkm;
}

//usgallon2cbcm

function usgallon2cbcm (usgallon) {
   cbcm = usgallon * 3785
   return cbcm;
}

//usgallon2cbmillimeter

function usgallon2cbmillimeter (usgallon) {
   cbmlm = usgallon * 3.785e+6
   return cbmlm;
}

//usgallon2liter

function usgallon2liter (usgallon) {
   liter = usgallon * 3.785
   return liter;
}

//usgallon2milliliter

function usgallon2milliliter (usgallon) {
   milliliter = usgallon * 3785
   return milliliter;
}

//usgallon2usquart

function usgallon2usquart (usgallon) {
   usquart = usgallon * 4
   return usquart;
}

//usgallon2uspint

function usgallon2uspint (usgallon) {
   uspint = usgallon * 8
   return uspint;
}

//usgallon2uscup

function usgallon2uscup (usgallon) {
   uscup = usgallon * 16
   return uscup;
}

//usgallon2usfluidounce

function usgallon2usfluidounce (usgallon) {
   fluidounce = usgallon * 128
   return fluidounce;
}

//usgallon2ustablespoon

function usgallon2ustablespoon(usgallon) {
   tablespoon = usgallon * 256
   return tablespoon;
}

//usgallon2usteaspoon

function usgallon2usteaspoon (usgallon) {
   teaspoon = usgallon * 768
   return teaspoon;
}

//usgallon2impgallon

function usgallon2impgallon (usgallon) {
   imperialgallon = usgallon / 1.201
   return imperialgallon;
}

//usgallon2impquart

function usgallon2impquart (usgallon) {
   imperialquart = usgallon * 3.331
   return imperialquart;
}

//usgallon2imperialpint

function usgallon2imperialpint (usgallon) {
   imperialpint = usgallon * 6.661
   return imperialpint;
}

//usgallon2impfluidounce

function usgallon2impfluidounce (usgallon) {
   impfluidounce = usgallon * 133.2
   return impfluidounce;
}

//usgallon2imptablespoon

function usgallon2imptablespoon (usgallon) {
   tablespoon = usgallon * 213.2
   return tablespoon;
}

//usgallon2impteaspoon

function usgallon2impteaspoon (usgallon) {
   teaspoon = usgallon * 639.5
   return teaspoon;
}

//usgallon2cbmile

function usgallon2cbmile (usgallon) {
   cbmile = usgallon / 1.101e+12
   return cbmile;
}

//usgallon2cbyard

function usgallon2cbyard (usgallon) {
   cbyard = usgallon / 202
   return cbyard;
}

//usgallon2cbfoot

function usgallon2cbfoot (usgallon) {
   cbfoot = usgallon / 7.48
   return cbfoot;
}

//usgallon2cbinch

function usgallon2cbinch (usgallon) {
   cbinch = usgallon * 231
   return cbinch;
}

//usquart2usquart

function usquart2usquart (usquart) {
   usquart = usquart
   return usquart;
}

//usquart2cbmeter

function usquart2cbmeter (usquart) {
   cbmeter = usquart / 1057
   return cbmeter;
}

//usquart2cbkm

function usquart2cbkm (usquart) {
   cbkm = usquart / 1.057e+12
   return cbkm;
}

//usquart2cbcm

function usquart2cbcm (usquart) {
   cbcm = usquart * 946.4
   return cbcm;
}

//usquart2cbmillimeter

function usquart2cbmillimeter (usquart) {
   cbmillimeter = usquart * 946400
   return cbmillimeter;
}

//usquart2liter

function usquart2liter (usquart) {
   liter = usquart / 1.057
   return liter;
}

//usquart2milliliter

function usquart2milliliter (usquart) {
   milliliter = usquart * 946.4
   return milliliter;
}

//usquart2usgallon

function usquart2usgallon (usquart) {
   usgallon = usquart / 4
   return usgallon;
}

//usquart2uspint

function usquart2uspint (usquart) {
   uspint = usquart * 2
   return uspint;
}

//usquart2uscup

function usquart2uscup (usquart) {
   uscup = usquart * 4
   return uscup;
}

//usquart2usfluidounce

function usquart2usfluidounce (usquart) {
   fluidounce = usquart * 32
   return fluidounce;
}

//usquart2ustablespoon

function usquart2ustablespoon (usquart) {
   tablespoon = usquart * 64
   return tablespoon;
}

//usquart2usteaspoon

function usquart2usteaspoon (usquart) {
   teaspoon = usquart * 192
   return teaspoon;
}

//usquart2impgallon

function usquart2impgallon (usquart) {
   imperialgallon = usquart / 4.804
   return imperialgallon;
}

//usquart2impquart

function usquart2impquart (usquart) {
   imperialquart = usquart / 1.201
   return imperialquart;
}

//usquart2imppint

function usquart2imppint (usquart) {
   imperialpint = usquart * 1.665
   return imperialpint;
}

//usquart2impfluidounce

function usquart2impfluidounce (usquart) {
   fluidounce = usquart * 33.307
   return fluidounce;
}

//usquart2imptablespoon

function usquart2imptablespoon (usquart) {
   tablespoon = usquart * 53.291
   return tablespoon;
}

//usquart2impteaspoon

function usquart2impteaspoon (usquart) {
   teaspoon = usquart * 159.9
   return teaspoon;
}

//usquart2cbmile

function usquart2cbmile (usquart) {
   cbmile = usquart / 4.404e+12
   return cbmile;
}

//usquart2cbyard

function usquart2cbyard (usquart) {
   cbyard = usquart / 807.9
   return cbyard;
}

//usquart2cbfoot

function usquart2cbfoot (usquart) {
   cbfoot = usquart / 29.922
   return cbfoot;
}

//usquart2cbinch

function usquart2cbinch (usquart) {
   cbinch = usquart * 57.75
   return cbinch;
}

//uspint2uspint

function uspint2uspint (uspint) {
   uspint = uspint
   return uspint;
}

//uspint2cbmeter

function uspint2cbmeter (uspint) {
   cbmeter = uspint / 2113
   return cbmeter;
}

//uspint2cbkm

function uspint2cbkm (uspint) {
   cbkm = uspint / 2.113e+12
   return cbkm;
}

//uspint2cbcm

function uspint2cbcm (uspint) {
   cbcm = uspint * 473.2
   return cbcm;
}

//uspint2cbmillimeter

function uspint2cbmillimeter (uspint) {
   cbmillimeter = uspint * 473200
   return cbmillimeter;
}

//uspint2liter

function uspint2liter (uspint) {
   liter = uspint / 2.113
   return liter;
}

//uspint2milliliter

function uspint2milliliter (uspint) {
   milliliter = uspint * 473.2
   return milliliter;
}

//uspint2usgallon

function uspint2usgallon (uspint) {
   usgallon = uspint / 8
   return usgallon;
}

//uspint2usquart

function uspint2usquart (uspint) {
   usquart = uspint / 2
   return usquart;
}

//uspint2uscup

function uspint2uscup (uspint) {
   uscup = uspint * 2
   return uscup;
}

//uspint2usfluidounce

function uspint2usfluidounce (uspint) {
   fluidounce = uspint * 16
   return fluidounce;
}

//uspint2ustablespoon

function uspint2ustablespoon (uspint) {
   tablespoon = uspint * 32
   return tablespoon;
}

//uspint2usteaspoon

function uspint2usteaspoon (uspint) {
   teaspoon = uspint * 96
   return teaspoon;
}

//uspint2impgallon

function uspint2impgallon (uspint) {
   imperialgallon = uspint / 9.608
   return imperialgallon;
}

//uspint2impquart

function uspint2impquart (uspint) {
   imperialquart = uspint / 2.402
   return imperialquart;
}

//uspint2imppint

function uspint2imppint (uspint) {
   imperialpint = uspint / 1.201
   return imperialpint;
}

//uspint2impfluidounce

function uspint2impfluidounce (uspint) {
   fluidounce = uspint * 16.653
   return fluidounce;
}

//uspint2imptablespoon

function uspint2imptablespoon (uspint) {
   tablespoon = uspint * 26.646
   return tablespoon;
}

//uspint2impteaspoon

function uspint2impteaspoon (uspint) {
   teaspoon = uspint * 79.937
   return teaspoon;
}

//uspint2cbmile

function uspint2cbmile (uspint) {
   cbmile = uspint / 8.809e+12
   return cbmile;
}

//uspint2cbyard

function uspint2cbyard (uspint) {
   cbyard = uspint / 1616
   return cbyard;
}

//uspint2cbfoot

function uspint2cbfoot (uspint) {
   cbfoot = uspint / 59.844
   return cbfoot;
}

//uspint2cbinch

function uspint2cbinch (uspint) {
   cbinch = uspint * 28.875
   return cbinch;
}

//uscup2uscup

function uscup2uscup (uscup) {
   uscup = uscup
   return uscup;
}

//uscup2cbmeter

function uscup2cbmeter (uscup) {
   cbmeter = uscup / 4227
   return cbmeter;
}

//uscup2cbkm

function uscup2cbkm (uscup) {
   cbkm = uscup / 4.227e+12
   return cbkm;
}

//uscup2cbcm

function uscup2cbcm (uscup) {
   cbcm = uscup * 236.6
   return cbcm;
}

//uscup2cbmillimeter

function uscup2cbmillimeter (uscup) {
   cbmillimeter = uscup * 236600
   return cbmillimeter;
}

//uscup2liter

function uscup2liter (uscup) {
   liter = uscup / 4.227
   return liter;
}

//uscup2milliliter

function uscup2milliliter (uscup) {
   milliliter = uscup * 236.6
   return milliliter;
}

//uscup2usgallon

function uscup2usgallon (uscup) {
   usgallon = uscup / 16
   return usgallon;
}

//uscup2usquart

function uscup2usquart (uscup) {
   usquart = uscup / 4
   return usquart;
}

//uscup2uspint

function uscup2uspint (uscup) {
   uspint = uscup / 2
   return uspint;
}

//uscup2usfluidounce

function uscup2usfluidounce (uscup) {
   fluidounce = uscup * 8
   return fluidounce;
}

//uscup2ustablespoon

function uscup2ustablespoon (uscup) {
   tablespoon = uscup * 16
   return tablespoon;
}

//uscup2usteaspoon

function uscup2usteaspoon (uscup) {
   teaspoon = uscup * 48
   return teaspoon;
}

//uscup2impgallon

function uscup2impgallon (uscup) {
   imperialgallon = uscup / 19.215
   return imperialgallon;
}

//uscup2impquart

function uscup2impquart (uscup) {
   imperialquart = uscup / 4.804
   return imperialquart;
}

//uscup2imppint

function uscup2imppint (uscup) {
   imperialpint = uscup / 2.402
   return imperialpint;
}

//uscup2impfluidounce

function uscup2impfluidounce (uscup) {
   fluidounce = uscup * 8.327
   return fluidounce;
}

//uscup2imptablespoon

function uscup2imptablespoon (uscup) {
   tablespoon = uscup * 13.323
   return tablespoon;
}

//uscup2impteaspoon

function uscup2impteaspoon (uscup) {
   teaspoon = uscup * 39.968
   return teaspoon;
}

//uscup2cbmile

function uscup2cbmile (uscup) {
   cbmile = uscup / 1.762e+13
   return cbmile;
}

//uscup2cbyard

function uscup2cbyard (uscup) {
   cbyard = uscup / 3232
   return cbyard;
}

//uscup2cbfoot

function uscup2cbfoot (uscup) {
   cbfoot = uscup / 119.7
   return cbfoot;
}

//uscup2cbinch

function uscup2cbinch (uscup) {
   cbinch = uscup * 14.438
   return cbinch;
}

//usfldounce2usfldounce

function usfldounce2usfldounce (fluidounce) {
   fluidounce = fluidounce
   return fluidounce;
}

//usfldounce2cbmeter

function usfldounce2cbmeter (fluidounce) {
   cbmeter = fluidounce / 33810
   return cbmeter;
}


//usfldounce2cbkm

function usfldounce2cbkm (fluidounce) {
   cbkm = fluidounce / 3.381e+13
   return cbkm;
}

//usfldounce2cbcm

function usfldounce2cbcm (fluidounce) {
   cbcm = fluidounce * 29.574
   return cbcm;
}

//usfldounce2cbmillimeter

function usfldounce2cbmillimeter (fluidounce) {
   cbmillimeter = fluidounce * 29570
   return cbmillimeter;
}

//usfldounce2liter

function usfldounce2liter (fluidounce) {
   liter = fluidounce / 33.814
   return liter;
}

//usfldounce2milliliter

function usfldounce2milliliter (fluidounce) {
   milliliter = fluidounce * 29.574
   return milliliter;
}

//usfldounce2usgallon

function usfldounce2usgallon (fluidounce) {
   usgallon = fluidounce / 128
   return usgallon;
}

//usfldounce2usquart

function usfldounce2usquart (fluidounce) {
   usquart = fluidounce / 32
   return usquart;
}

//usfldounce2uspint

function usfldounce2uspint (fluidounce) {
   uspint = fluidounce / 16
   return uspint;
}

//usfldounce2uscup

function usfldounce2uscup (fluidounce) {
   uscup = fluidounce / 8
   return uscup;
}

//usfldounce2ustblspoon

function usfldounce2ustblspoon (fluidounce) {
   tablespoon = fluidounce * 2
   return tablespoon;
}

//usfldounce2usteaspoon

function usfldounce2usteaspoon (fluidounce) {
   teaspoon = fluidounce * 6
   return teaspoon;
}

//usfldounce2impgallon

function usfldounce2impgallon (fluidounce) {
   imperialgallon = fluidounce /  153.7
   return imperialgallon;
}

//usfldounce2impquart

function usfldounce2impquart (fluidounce) {
   imperialquart = fluidounce / 38.43
   return imperialquart;
}

//usfldounce2imppint

function usfldounce2imppint (fluidounce) {
   imperialpint = fluidounce / 19.215
   return imperialpint;
}

//usfldounce2impfldounce

function usfldounce2impfldounce (fluidounce) {
   impfluidounce = fluidounce * 1.041
   return impfluidounce;
}

//usfldounce2imptblspoon

function usfldounce2imptblspoon (fluidounce) {
   imptablespoon = fluidounce * 1.665
   return imptablespoon;
}

//usfldounce2impteaspoon

function usfldounce2impteaspoon (fluidounce) {
   impteaspoon = fluidounce * 4.996
   return impteaspoon;
}

//usfldounce2cbmile

function usfldounce2cbmile (fluidounce) {
   cbmile = fluidounce / 1.409e+14
   return cbmile;
}

//usfldounce2cbyard

function usfldounce2cbyard (fluidounce) {
   cbyard = fluidounce / 25850
   return cbyard;
}

//usfldounce2cbfoot

function usfldounce2cbfoot (fluidounce) {
   cbfoot = fluidounce / 957.5
   return cbfoot;
}

//usfldounce2cbinch

function usfldounce2cbinch (fluidounce) {
   cbinch = fluidounce * 1.805
   return cbinch;
}

//ustblspoon2ustblspoon

function ustblspoon2ustblspoon (tablespoon) {
   tablespoon = tablespoon
   return tablespoon
}

//ustblspoon2cbmeter

function ustblspoon2cbmeter (tablespoon) {
   cbmeter = tablespoon / 67630
   return cbmeter;
}

//ustblspoon2cbkm

function ustblspoon2cbkm (tablespoon) {
   cbkm = tablespoon / 6.763e+13
   return cbkm;
}

//ustblspoon2cbcm

function ustblspoon2cbcm (tablespoon) {
   cbcm = tablespoon * 14.787
   return cbcm;
}

//ustblspoon2cbmillimeter

function ustblspoon2cbmillimeter (tablespoon) {
   cbmillimeter = tablespoon * 14790
   return  cbmillimeter;
}

//ustblspoon2liter

function ustblspoon2liter (tablespoon) {
   liter = tablespoon / 67.628
   return liter;
}

//ustblspoon2milliliter

function ustblspoon2milliliter (tablespoon) {
   milliliter = tablespoon * 14.787
   return milliliter;
}

//ustblspoon2usgallon

function ustblspoon2usgallon (tablespoon) {
   usgallon = tablespoon / 256
   return usgallon;
}

//ustblspoon2usquart

function ustblspoon2usquart (tablespoon) {
   usquart = tablespoon / 64
   return usquart;
}

//ustblspoon2uspint

function ustblspoon2uspint (tablespoon) {
   uspint = tablespoon / 32
   return uspint;
}

//ustblspoon2uscup

function ustblspoon2uscup (tablespoon) {
    uscup = tablespoon / 16
   return uscup;
}

//ustblspoon2usfldounce

function ustblspoon2usfldounce (tablespoon) {
   fluidounce = tablespoon / 2
   return fluidounce;
}

//ustblspoon2usteaspoon

function ustblspoon2usteaspoon (tablespoon) {
   teaspoon = tablespoon * 3
   return teaspoon;
}

//ustblspoon2impgallon

function ustblspoon2impgallon (tablespoon) {
   imperialgallon = tablespoon / 307.4
   return imperialgallon;
}

//ustblspoon2impquart

function ustblspoon2impquart (tablespoon) {
   imperialquart = tablespoon / 76.861
   return imperialquart;
}

//ustblspoon2imppint

function ustblspoon2imppint (tablespoon) {
   imperialpint = tablespoon / 38.43
   return imperialpint;
}

//ustblspoon2impfldounce

function ustblspoon2impfldounce (tablespoon) {
   impfluidounce = tablespoon / 1.922
   return impfluidounce;
}

//ustblspoon2imptblspoon

function ustblspoon2imptblspoon (tablespoon) {
   imptablespoon = tablespoon / 1.201
   return imptablespoon;
}

//ustblspoon2impteaspoon

function ustblspoon2impteaspoon (tablespoon) {
   teaspoon = tablespoon * 2.498
   return teaspoon;
}

//ustblspoon2cbmile

function ustblspoon2cbmile (tablespoon) {
   cbmile = tablespoon / 2.819e+14
   return cbmile;
}

//ustblspoon2cbyard

function ustblspoon2cbyard (tablespoon) {
   cbyard = tablespoon / 51710
   return cbyard;
}

//ustblspoon2cbfoot

function ustblspoon2cbfoot (tablespoon) {
   cbfoot = tablespoon / 1915
   return cbfoot;
}

//ustblspoon2cbinch

function ustblspoon2cbinch (tablespoon) {
   cbinch = tablespoon / 1.108
   return cbinch;
}

//usteasppon2usteaspoon

function usteasppon2usteaspoon (usteaspoon) {
   usteaspoon = usteaspoon
   return usteaspoon;
}

//usteaspoon2cbmeter

function usteaspoon2cbmeter (usteaspoon) {
   cbmeter = usteaspoon / 202900
   return cbmeter;
}

//usteaspoon2cbkm

function usteaspoon2cbkm (usteaspoon) {
   cbkm = usteaspoon / 6.763e+13
   return cbkm;
}

//usteaspoon2cbcm

function usteaspoon2cbcm (usteaspoon) {
   cbcm = usteaspoon * 14.787
   return cbcm;
}

//usteaspoon2cbmlm

function usteaspoon2cbmlm (usteaspoon) {
   cbmillimeter = usteaspoon * 14790
   return cbmillimeter;
}

//usteaspoon2liter

function usteaspoon2liter (usteaspoon) {
    liter = usteaspoon / 67.628
   return liter;
}

//usteaspoon2milliliter

function usteaspoon2milliliter (usteaspoon) {
   milliliter = usteaspoon * 14.787
   return milliliter;
}

//usteaspoon2usgallon

function usteaspoon2usgallon (usteaspoon) {
   usgallon = usteaspoon / 256
   return usgallon;
}

//usteaspoon2usquart

function usteaspoon2usquart (usteaspoon) {
   usquart = usteaspoon / 64
   return usquart;
}

//usteaspoon2uspint

function usteaspoon2uspint (usteaspoon) {
   uspint = usteaspoon / 32
   return uspint;
}

//usteaspoon2usteaspoon

function usteaspoon2uscup (usteaspoon) {
   uscup = usteaspoon / 16
   return uscup;
}

//usteaspoon2usfldounce

function usteaspoon2usfldounce (usteaspoon) {
   usfluidounce = usteaspoon / 2
   return usfluidounce;
}

//usteaspoon2ustblspoon

function usteaspoon2ustblspoon (usteaspoon) {
   tablespoon = usteaspoon * 2
   return tablespoon;
}

//usteaspoon2impgallon

function usteaspoon2impgallon (usteaspoon) {
   imperialgallon = usteaspoon / 153.7
   return imperialgallon;
}

//usteaspoon2impquart

function usteaspoon2impquart (usteaspoon) {
   imperialquart = usteaspoon / 38.43
   return imperialquart;
}

//usteaspoon2imppint

function usteaspoon2imppint (usteaspoon) {
   imperialpint = usteaspoon / 19.215
   return imperialpint;
}

//usteaspoon2impfldounce

function usteaspoon2impfldounce (usteaspoon) {
   impfluidounce = usteaspoon * 1.041
   return impfluidounce;
}

//usteaspoon2tblspoon

function usteaspoon2tblspoon (usteaspoon) {
   imptablespoon = usteaspoon * 1.665
   return imptablespoon;
}

//usteaspoon2impteaspoon

function usteaspoon2impteaspoon (usteaspoon) {
   impteaspoon = usteaspoon * 4.996
   return impteaspoon;
}

//usteaspoon2cbmile

function usteaspoon2cbmile (usteaspoon) {
   cbmile = usteaspoon / 2.819e+14
   return cbmile;
}

//usteaspoon2cbyard

function usteaspoon2cbyard (usteaspoon) {
   cbyard = usteaspoon / 51710
   return cbyard;
}

//usteaspoon2cbfoot

function usteaspoon2cbfoot (usteaspoon) {
   cbfoot = usteaspoon / 1915 
   return cbfoot;
}

//usteaspoon2cbinch

function usteaspoon2cbinch (usteaspoon) {
   cbinch = usteaspoon / 1.108
   return cbinch;
}

//impgallon2impgallon

function impgallon2impgallon (impgallon) {
   impgallon = impgallon
   return impgallon;
}

//impgallon2cbmeter

function impgallon2cbmeter (impgallon) {
   cbmeter = impgallon / 220
   return cbmeter;
}

//impgallon2cbkm

function impgallon2cbkm (impgallon) {
   cbkm = impgallon /  2.2e+11
   return cbkm;
}

//impgallon2cbcm

function impgallon2cbcm (impgallon) {
   cbcm = impgallon * 4546
   return cbcm;
}

//impgallon2cbmlm

function impgallon2cbmlm (impgallon) {
   cbmillimeter = impgallon * 4.546e+6
   return cbmillimeter;
}

//impgallon2liter

function impgallon2liter (impgallon) {
   liter = impgallon * 4.546
   return liter;
}

//impgallon2milliliter

function impgallon2milliliter (impgallon) {
   milliliter = impgallon * 4546
   return milliliter;
}

//impgallon2usgallon

function impgallon2usgallon (impgallon) {
   usgallon = impgallon *  1.201
   return usgallon;
}

//impgallon2usquart

function impgallon2usquart (impgallon) {
   usquart = impgallon * 4.804
   return usquart;
}

//impgallon2uspint

function impgallon2uspint (impgallon) {
   uspint = impgallon * 9.608
   return uspint;
}

//impgallon2uscup

function impgallon2uscup (impgallon) {
   uscup = impgallon * 19.215
   return uscup;
}

//impgallon2usfldounce

function impgallon2usfldounce (impgallon) {
   usfluidounce = impgallon * 153.7
   return usfluidounce;
}

//impgallon2ustblspoon

function impgallon2ustblspoon (impgallon) {
   ustablespoon = impgallon * 307.4
   return ustablespoon;
}

//impgallon2usteaspoon

function impgallon2usteaspoon (impgallon) {
   usteaspoon = impgallon * 922.3
   return usteaspoon;
}

//impgallon2impquart

function impgallon2impquart (impgallon) {
   imperialquart = impgallon * 4
   return imperialquart;
}

//impgallon2imppint

function impgallon2imppint (impgallon) {
   imperialpint = impgallon * 8
   return imperialpint;
}

//impgallon2impfldounce

function impgallon2impfldounce (impgallon) {
   impfluidounce = impgallon * 160
   return impfluidounce;
}

//impgallon2imptblspoon

function impgallon2imptblspoon (impgallon) {
   imptablespoon = impgallon * 256
   return imptablespoon;
}

//impgallon2impteaspoon

function impgallon2impteaspoon (impgallon) {
   impteaspoon = impgallon * 768
   return impteaspoon;
}

//impgallon2cbmile

function impgallon2cbmile (impgallon) {
   cbmile = impgallon / 9.169e+11
   return cbmile;
}

//impgallon2cbyard

function impgallon2cbyard (impgallon) {
   cbyard = impgallon / 168.2
   return cbyard;
}

//impgallon2cbfoot

function impgallon2cbfoot (impgallon) {
   cbfoot = impgallon / 6.229
   return cbfoot;
}

//impgallon2cbinch

function impgallon2cbinch (impgallon) {
   cbinch = impgallon * 277.4
   return cbinch;
}

//impquart2impquart

function impquart2impquart (impquart) {
   impquart = impquart
   return impquart;
}

//impquart2cbmeter

function impquart2cbmeter (impquart) {
   cbmeter = impquart / 879.9
   return cbmeter;
}

//impquart2cbkm

function impquart2cbkm (impquart) {
   cbkm = impquart / 8.799e+11
   return cbkm;
}

//impquart2cbcm

function impquart2cbcm (impquart) {
   cbcm = impquart * 1137
   return cbcm;
}

//impquart2cbmlm

function impquart2cbmlm (impquart) {
   cbmlm = impquart * 1.137e+6
   return cbmlm;
}

//impquart2liter

function impquart2liter (impquart) {
   liter = impquart *  1.137
   return liter;
}

//impquart2milliliter

function impquart2milliliter (impquart) {
   milliliter = impquart * 1137
   return milliliter;
}

//impquart2usgallon

function impquart2usgallon (impquart) {
   usgallon = impquart / 3.331
   return usgallon;
}

//impquart2usquart

function impquart2usquart (impquart) {
   usquart = impquart * 1.201
   return usquart;
}

//impquart2uspint

function impquart2uspint (impquart) {
   uspint = impquart * 2.402
   return uspint;
}

//impquart2uscup

function impquart2uscup (impquart) {
   uscup = impquart * 4.804
   return uscup;
}

//impquart2usfldounce

function impquart2usfldounce (impquart) {
   usfluidounce = impquart * 38.43
   return usfluidounce;
}

//impquart2ustblspoon

function impquart2ustblspoon (impquart) {
   ustablespoon = impquart * 76.861
   return ustablespoon;
}

//impquart2usteaspoon

function impquart2usteaspoon (impquart) {
   usteaspoon = impquart * 230.6
   return usteaspoon;
}

//impquart2impgallon

function impquart2impgallon (impquart) {
   impgallon = impquart / 4
   return impgallon;
}

//impquart2imppint

function impquart2imppint (impquart) {
   imperialpint = impquart * 2
   return imperialpint;
}

//impquart2impfldounce

function impquart2impfldounce (impquart) {
   impfluidounce = impquart * 40
   return impfluidounce;
}

//impquart2imptblspoon

function impquart2imptblspoon (impquart) {
   imptablespoon = impquart * 64
   return imptablespoon;
}

//impquart2impteaspoon

function impquart2impteaspoon (impquart) {
   impteaspoon = impquart * 192
   return impteaspoon;
}

//impquart2cbmile

function impquart2cbmile (impquart) {
   cbmile = impquart / 3.667e+12
   return cbmile;
}

//impquart2cbyard

function impquart2cbyard (impquart) {
   cbyard = impquart / 672.7
   return cbyard;
}

//impquart2cbfoot

function impquart2cbfoot (impquart) {
   cbfoot = impquart / 24.915
   return cbfoot;
}

//impquart2cbinch

function impquart2cbinch (impquart) {
   cbinch = impquart * 69.355
   return cbinch;
}

//imppint2imppint

function imppint2imppint (imppint) {
   imppint = imppint
   return imppint;
}

//imppint2cbmeter

function imppint2cbmeter (imppint) {
   cbmeter = imppint / 1760
   return cbmeter;
}

//imppint2cbkm

function imppint2cbkm (imppint) {
   cbkm = imppint / 1.76e+12
   return cbkm;
}

//imppint2cbcm

function imppint2cbcm (imppint) {
   cbcm = imppint * 568.3
   return cbcm;
}

//imppint2cbmlm

function imppint2cbmlm (imppint) {
   cbmlm = imppint * 568300
   return cbmlm;
}

//imppint2liter

function imppint2liter (imppint) {
   liter = imppint / 1.76
   return liter;
}

//imppint2milliliter

function imppint2milliliter (imppint) {
   milliliter = imppint * 568.3
   return milliliter;
}

//imppint2usgallon

function imppint2usgallon (imppint) {
   usgallon = imppint / 6.661
   return usgallon;
}

//imppint2usquart

function imppint2usquart (imppint) {
   usquart = imppint / 1.665
   return usquart;
}

//imppint2uspint

function imppint2uspint (imppint) {
   uspint = imppint * 1.201
   return uspint;
}

//imppint2uscup

function imppint2uscup (imppint) {
   uscup = imppint * 2.402
   return uscup;
}

//imppint2usfldounce

function imppint2usfldounce (imppint) {
   usfluidounce = imppint * 19.215
   return usfluidounce;
}

//imppint2ustblspoon

function imppint2ustblspoon (imppint) {
   ustablespoon = imppint * 38.43
   return ustablespoon;
}

//imppint2usteaspoon

function imppint2usteaspoon (imppint) {
   usteaspoon = imppint * 115.3
   return usteaspoon;
}

//imppint2impgallon

function imppint2impgallon (imppint) {
   impgallon = imppint / 8
   return impgallon;
}

//imppint2impquart

function imppint2impquart (imppint) {
   impquart = imppint / 2
   return impquart;
}

//imppint2impfldounce

function imppint2impfldounce (imppint) {
   impfluidounce = imppint * 40
   return impfluidounce;
}

//imppint2imptblspoon

function imppint2imptblspoon (imppint) {
   imptablespoon = imppint * 64
   return imptablespoon;
}

//imppint2impteaspoon

function imppint2impteaspoon (imppint) {
   impteaspoon = imppint * 192
   return impteaspoon;
}

//imppint2cbmile

function imppint2cbmile (imppint) {
   cbmile = imppint / 7.335e+12
   return cbmile;
}

//imppint2cbyard

function imppint2cbyard (imppint) {
   cbyard = imppint / 1345
   return cbyard;
}

//imppint2cbfoot

function imppint2cbfoot (imppint) {
   cbfoot = imppint / 49.831
   return cbfoot;
}

//imppint2cbinch

function imppint2cbinch (imppint) {
   cbinch = imppint * 34.677
   return cbinch;
}

//impfldounce2impfldounce

function impfldounce2impfldounce (impfluidounce) {
   impfluidounce = impfluidounce
   return impfluidounce;
}

//impfldounce2cbmeter

function impfldounce2cbmeter (impfluidounce) {
   cbmeter = impfluidounce / 35200
   return cbmeter;
}

//impfldounce2cbkm

function impfldounce2cbkm (impfluidounce) {
   cbkm = impfluidounce / 3.52e+13
   return cbkm;
}

//impfldounce2cbcm

function impfldounce2cbcm (impfluidounce) {
   cbcm = impfluidounce * 28.413
   return cbcm;
}

//impfldounce2cbmlm

function impfldounce2cbmlm (impfluidounce) {
   cbmlm = impfluidounce *  28410
   return cbmlm;
}

//impfldounce2liter

function impfldounce2liter (impfluidounce) {
   liter = impfluidounce / 35.195
   return liter;
}

//impfldounce2milliliter

function impfldounce2milliliter (impfluidounce) {
   milliliter = impfluidounce * 28.413
   return milliliter;
}

//impfldounce2usgallon

function impfldounce2usgallon (impfluidounce) {
   usgallon = impfluidounce / 133.2
   return usgallon;
}

//impfldounce2usquart

function impfldounce2usquart (impfluidounce) {
   usquart = impfluidounce / 33.307
   return usquart;
}

//impfldounce2uspint

function impfldounce2uspint (impfluidounce) {
   uspint = impfluidounce / 16.654
   return uspint;
}

//impfldounce2uscup

function impfldounce2uscup (impfluidounce) {
   uscup = impfluidounce /  8.327
   return uscup;
}

//impfldounce2usfldounce

function impfldounce2usfldounce (impfluidounce) {
   usfluidounce = impfluidounce / 1.041
   return usfluidounce;
}

//impfldounce2ustblspoon

function impfldounce2ustblspoon (impfluidounce) {
   ustablespoon = impfluidounce * 1.922
   return ustablespoon;
}

//impfldounce2usteaspoon

function impfldounce2usteaspoon (impfluidounce) {
   usteaspoon= impfluidounce * 5.765
   return usteaspoon;
}

//impfldounce2impgallon

function impfldounce2impgallon (impfluidounce) {
   impgallon = impfluidounce / 160
   return impgallon;
}

//impfldounce2impquart

function impfldounce2impquart (impfluidounce) {
   impquart = impfluidounce / 40
   return impquart;
}

//impfldounce2imppint

function impfldounce2imppint (impfluidounce) {
   imppint = impfluidounce / 20
   return imppint;
}

//impfldounce2imptblspoon

function impfldounce2imptblspoon (impfluidounce) {
   imptablespoon = impfluidounce * 1.6
   return imptablespoon;
}

//impfldounce2impteaspoon

function impfldounce2impteaspoon (impfluidounce) {
   impteaspoon = impfluidounce * 4.8
   return impteaspoon;
}

//impfldounce2cbmile

function impfldounce2cbmile (impfluidounce) {
   cbmile = impfluidounce / 1.467e+14
   return cbmile;
}

//impfldounce2cbyard

function impfldounce2cbyard (impfluidounce) {
   cbyard = impfluidounce / 26910
   return cbyard;
}

//impfldounce2cbfoot

function impfldounce2cbfoot (impfluidounce) {
   cbfoot = impfluidounce / 996.6
   return cbfoot;
}

//impfldounce2cbinch

function impfldounce2cbinch (impfluidounce) {
   cbinch = impfluidounce * 1.734
   return cbinch;
}

//imptblspoon2imptblspoon

function imptblspoon2imptblspoon (imptablespoon) {
   imptablespoon = imptablespoon
   return imptablespoon;
}

//imptblspoon2cbmeter

function imptblspoon2cbmeter (imptablespoon) {
   cbmeter = imptablespoon / 56310
   return cbmeter;
}

//imptblspoon2cbkm

function imptblspoon2cbkm (imptablespoon) {
   cbkm = imptablespoon / 5.631e+13
   return cbkm;
}

//imptblspoon2cbcm

function imptblspoon2cbcm (imptablespoon) {
   cbcm = imptablespoon * 17.758
   return cbcm;
}

//imptblspoon2cbmlm

function imptblspoon2cbmlm (imptablespoon) {
   cbmlm = imptablespoon * 17760
   return cbmlm;
}

//imptblspoon2liter

function imptblspoon2liter (imptablespoon) {
   liter = imptablespoon / 56.312
   return liter;
}

//imptblspoon2milliliter

function imptblspoon2milliliter (imptablespoon) {
   milliliter = imptablespoon * 17.758
   return milliliter;
}

//imptblspoon2usgallon

function imptblspoon2usgallon (imptablespoon) {
   usgallon = imptablespoon / 213.2
   return usgallon;
}

//imptblspoon2usquart

function imptblspoon2usquart (imptablespoon) {
   usquart = imptablespoon / 53.291
   return usquart;
}

//imptblspoon2uspint

function imptblspoon2uspint (imptablespoon) {
   uspint = imptablespoon / 26.646
   return uspint;
}

//imptblspoon2uscup

function imptblspoon2uscup (imptablespoon) {
   uscup = imptablespoon / 13.323
   return uscup;
}

//imptblspoon2usfldounce

function imptblspoon2usfldounce (imptablespoon) {
   usfluidounce = imptablespoon / 1.665
   return usfluidounce;
}

//imptblspoon2usblspoon

function imptblspoon2ustblspoon (imptablespoon) {
   ustablespoon = imptablespoon * 1.201
   return ustablespoon;
}

//imptblspoon2usteaspoon

function imptblspoon2usteaspoon (imptablespoon) {
   usteaspoon = imptablespoon * 3.603
   return usteaspoon;
}

//imptblspoon2impgallon

function imptblspoon2impgallon (imptablespoon) {
   impgallon = imptablespoon / 256
   return impgallon;
}

//imptblspoon2impquart

function imptblspoon2impquart (imptablespoon) {
   impquart = imptablespoon / 64
   return impquart;
}

//imptblspoon2imppint

function imptblspoon2imppint (imptablespoon) {
   imppint = imptablespoon / 32
   return imppint;
}

//imptblspoon2impfldounce

function imptblspoon2impfldounce (imptablespoon) {
   impfluidounce = imptablespoon / 1.6
   return impfluidounce;
}

//imptblspoon2impteaspoon

function imptblspoon2impteaspoon (imptablespoon) {
   impteaspoon = imptablespoon * 3
   return impteaspoon;
}

//imptblspoon2cbmile

function imptblspoon2cbmile (imptablespoon) {
   cbmile = imptablespoon / 2.347e+14
   return cbmile;
}

//imptblspoon2cbyard

function imptblspoon2cbyard (imptablespoon) {
   cbyard = imptablespoon / 43050
   return cbyard;
}

//imptblspoon2cbfoot

function imptblspoon2cbfoot (imptablespoon) {
   cbfoot = imptablespoon / 1595
   return cbfoot;
}

//imptblspoon2cbinch

function imptblspoon2cbinch (imptablespoon) {
   cbinch = imptablespoon * 1.084
   return cbinch;
}

//impteaspoon2impteaspoon

function impteaspoon2impteaspoon (impteaspoon) {
   impteaspoon = impteaspoon
   return impteaspoon;
}

//impteaspoon2cbmeter

function impteaspoon2cbmeter (impteaspoon) {
   cbmeter = impteaspoon / 168900
   return cbmeter;
}

//impteaspoon2cbkm

function impteaspoon2cbkm (impteaspoon) {
   cbkm = impteaspoon / 1.689e+14
   return cbkm;
}

//impteaspoon2cbcm

function impteaspoon2cbcm (impteaspoon) {
   cbcm = impteaspoon * 5.919
   return cbcm;
}

//impteaspoon2cbmlm

function impteaspoon2cbmlm (impteaspoon) {
   cbmlm = impteaspoon * 5919
   return cbmlm;
}

//impteaspoon2liter

function impteaspoon2liter (impteaspoon) {
   liter = impteaspoon / 168.9
   return liter;
}

//impteaspoon2milliliter

function impteaspoon2milliliter (impteaspoon) {
   milliliter = impteaspoon * 5.919
   return milliliter;
}

//impteaspoon2usgallon

function impteaspoon2usgallon (impteaspoon) {
   usgallon = impteaspoon / 639.5
   return usgallon;
}

//impteaspoon2usquart

function impteaspoon2usquart (impteaspoon) {
   usquart = impteaspoon / 159.9
   return usquart;
}

//impteaspoon2uspint

function impteaspoon2uspint (impteaspoon) {
   uspint = impteaspoon / 79.937
   return uspint;
}

//impteaspoon2uscup

function impteaspoon2uscup (impteaspoon) {
   uscup = impteaspoon / 39.968
   return uscup;
}

//impteaspoon2usfldounce

function impteaspoon2usfldounce (impteaspoon) {
   usfluidounce = impteaspoon / 4.996
   return usfluidounce;
}

//impteaspoon2ustablespoon

function impteaspoon2ustablespoon (impteaspoon) {
   ustablespoon = impteaspoon / 2.498
   return ustablespoon;
}

//impteaspoon2usteaspoon

function impteaspoon2usteaspoon (impteaspoon) {
   usteaspoon = impteaspoon * 1.201
   return usteaspoon;
}

//impteaspoon2impgallon

function impteaspoon2impgallon (impteaspoon) {
   impgallon = impteaspoon / 768
   return impgallon;
}

//impteaspoon2impquart

function impteaspoon2impquart (impteaspoon) {
   impquart = impteaspoon / 192
   return impquart;
}

//impteaspoon2imppint

function impteaspoon2imppint (impteaspoon) {
   imppint = impteaspoon / 96
   return imppint;
}

//impteaspoon2impfldounce

function impteaspoon2impfldounce (impteaspoon) {
   impfluidounce = impteaspoon / 4.8
   return impfluidounce;
}

//impteaspoon2imptablespoon

function impteaspoon2imptablespoon (impteaspoon) {
   imptablespoon = impteaspoon / 3
   return imptablespoon;
}

//impteaspoon2cbmile

function impteaspoon2cbmile (impteaspoon) {
   cbmile = impteaspoon / 7.042e+14
   return cbmile;
}

//impteaspoon2cbyard

function impteaspoon2cbyard (impteaspoon) {
   cbyard = impteaspoon / 129200
   return cbyard;
}

//impteaspoon2cbfoot

function impteaspoon2cbfoot (impteaspoon) {
   cbfoot = impteaspoon / 4784
   return cbfoot;
}

//impteaspoon2cbinch

function impteaspoon2cbinch (impteaspoon) {
   cbinch = impteaspoon / 2.768
   return cbinch;
}

//cbmile2cbmile

function cbmile2cbmile (cbmile) {
   cbmile = cbmile
   return cbmile; 
}

//cbmile2cbmeter

function cbmile2cbmeter (cbmile) {
   cbmeter = cbmile * 4.168e+9
   return cbmeter;
}

//cbmile2cbkm

function cbmile2cbkm (cbmile) {
   cbkm = cbmile * 4.168
   return cbkm;
}

//cbmile2cbcm

function cbmile2cbcm (cbmile) {
   cbcm = cbmile * 4.168e+15
   return cbcm;
}

//cbmile2cbmlm

function cbmile2cbmlm (cbmile) {
   cbmlm = cbmile * 4.168e+18
   return cbmlm;
}

//cbmile2liter

function cbmile2liter (cbmile) {
   liter = cbmile * 4.168e+12
   return liter;
}

//cbmile2milliliter

function cbmile2milliliter (cbmile) {
   milliliter = cbmile * 4.168e+15
   return milliliter;
}

//cbmile2usgallon

function cbmile2usgallon (cbmile) {
   usgallon = cbmile * 1.101e+12
   return usgallon;
}

//cbmile2usquart

function cbmile2usquart (cbmile) {
   usquart = cbmile * 4.404e+12
   return usquart;
}

//cbmile2uspint

function cbmile2uspint (cbmile) {
   uspint = cbmile * 8.809e+12
   return uspint;
}

//cbmile2uscup

function cbmile2uscup (cbmile) {
   uscup = cbmile * 1.762e+13
   return uscup;
}

//cbmile2usfldounce

function cbmile2usfldounce (cbmile) {
   usfluidounce = cbmile * 1.409e+14
   return usfluidounce;
}

//cbmile2ustablespoon

function cbmile2ustablespoon (cbmile) {
   ustablespoon = cbmile * 2.819e+14
   return ustablespoon;
}

//cbmile2usteaspoon

function cbmile2usteaspoon (cbmile) {
   usteaspoon = cbmile * 8.457e+14
   return usteaspoon;
}

//cbmile2impgallon

function cbmile2impgallon (cbmile) {
   impgallon = cbmile * 9.169e+11
   return impgallon;
}

//cbmile2impquart

function cbmile2impquart (cbmile) {
   impquart = cbmile * 3.667e+12
   return impquart;
}

//cbmile2imppint

function cbmile2imppint (cbmile) {
   imppint = cbmile * 7.335e+12
   return imppint;
}

//cbmile2impfldounce

function cbmile2impfldounce (cbmile) {
   impfluidounce = cbmile * 1.467e+14
   return impfluidounce;
}

//cbmile2imptablespoon

function cbmile2imptablespoon (cbmile) {
   imptablespoon = cbmile * 2.347e+14
   return imptablespoon;
}

//cbmile2impteaspoon
 
function cbmile2impteaspoon (cbmile) {
   impteaspoon = cbmile * 7.042e+14
   return impteaspoon;
}

//cbmile2cbyard

function cbmile2cbyard (cbmile) {
   cbyard = cbmile * 5.452e+9
   return cbyard;
}

//cbmile2cbfoot

function cbmile2cbfoot (cbmile) {
   cbfoot = cbmile * 1.472e+11
   return cbfoot;
}

//cbmile2cbinch

function cbmile2cbinch (cbmile) {
   cbinch = cbmile * 2.544e+14
   return cbinch;
}

//cbyard2cbyard

function cbyard2cbyard (cbyard) {
   cbyard = cbyard
   return cbyard;
}

//cbyard2cbmeter

function cbyard2cbmeter (cbyard) {
   cbmeter = cbyard / 1.308
   return cbmeter;
}

//cbyard2cbkm

function cbyard2cbkm (cbyard) {
   cbkm = cbyard / 1.308e+9
   return cbkm;
}

//cbyard2cbcm

function cbyard2cbcm (cbyard) {
   cbcm = cbyard * 764600
   return cbcm;
}

//cbyard2cbmlm

function cbyard2cbmlm (cbyard) {
   cbmlm = cbyard * 7.646e+8
   return cbmlm;
}

//cbyard2liter

function cbyard2liter (cbyard) {
   liter = cbyard * 764.6
   return liter;
}

//cbyard2milliliter

function cbyard2milliliter (cbyard) {
   milliliter = cbyard * 764600
   return milliliter;
}

//cbyard2usgallon

function cbyard2usgallon (cbyard) {
   usgallon = cbyard * 202
   return usgallon;
}

//cbyard2usquart

function cbyard2usquart (cbyard) {
   usquart = cbyard * 807.9
   return usquart;
}

//cbyard2uspint

function cbyard2uspint (cbyard) {
   uspint = cbyard * 1616
   return uspint;
}

//cbyard2uscup

function cbyard2uscup (cbyard) {
   uscup = cbyard * 33232
   return uscup;
}

//cbyard2usfluidounce

function cbyard2usfluidounce (cbyard) {
   usfluidounce = cbyard * 25850
   return usfluidounce;
}

//cbyard2ustablespoon

function cbyard2ustablespoon (cbyard) {
   ustablespoon = cbyard * 51710
   return ustablespoon;
}

//cbyard2usteaspoon

function cbyard2usteaspoon (cbyard) {
   usteaspoon = cbyard * 155100
   return usteaspoon;
}

//cbyard2impgallon

function cbyard2impgallon (cbyard) {
   impgallon = cbyard * 168.2
   return impgallon;
}

//cbyard2impquart

function cbyard2impquart (cbyard) {
   impquart = cbyard * 672.7
   return impquart;
}

//cbyard2imppint

function cbyard2imppint (cbyard) {
   imppint = cbyard * 1345
   return imppint;
}

//cbyard2impfluidounce

function cbyard2impfluidounce (cbyard) {
   impfluidounce = cbyard * 26910
   return impfluidounce;
}

//cbyard2imptablespoon

function cbyard2imptablespoon (cbyard) {
   imptablespoon = cbyard * 43050
   return imptablespoon;
}

//cbyard2impteaspoon

function cbyard2impteaspoon (cbyard) {
   impteaspoon = cbyard * 129200
   return impteaspoon;
}

//cbyard2cbmile

function cbyard2cbmile (cbyard) {
   cbmile = cbyard / 5.452e+9
   return cbmile;
}

//cbyard2cbfoot

function cbyard2cbfoot (cbyard) {
   cbfoot = cbyard * 27
   return cbfoot;
}

//cbyard2cbinch

function cbyard2cbinch (cbyard) {
   cbinch = cbyard * 46660
   return cbinch;
}

//cbfoot2cbfoot 

function cbfoot2cbfoot (cbfoot) {
   cbfoot = cbfoot
   return cbfoot;
}

//cbfoot2cbmeter

function cbfoot2cbmeter (cbfoot) {
   cbmeter = cbfoot / 35.315
   return cbmeter;
}

//cbfoot2cbkm

function cbfoot2cbkm (cbfoot) {
   cbkm = cbfoot / 3.531e+10
   return cbkm;
}

//cbfoot2cbcm 

function cbfoot2cbcm (cbfoot) {
   cbcm = cbfoot * 28320
   return cbcm;
}

//cbfoot2cbmlm 

function cbfoot2cbmlm (cbfoot) {
   cbmlm = cbfoot * 2.832e+7
   return cbmlm;
}

//cbfoot2liter 

function cbfoot2liter (cbfoot) {
   liter = cbfoot * 28.317
   return liter;
}

//cbfoot2milliliter 

function cbfoot2milliliter (cbfoot) {
   milliliter = cbfoot * 28320
   return milliliter;
}

//cbfoot2usgallon

function cbfoot2usgallon (cbfoot) {
   usgallon = cbfoot * 7.481
   return usgallon;
}

//cbfoot2usquart

function cbfoot2usquart (cbfoot) {
   usquart = cbfoot * 29.922
   return usquart;
}

//cbfoot2uspint

function cbfoot2uspint (cbfoot) {
   uspint = cbfoot * 59.844
   return uspint;
}

//cbfoot2uscup

function cbfoot2uscup (cbfoot) {
   uscup = cbfoot * 119.7
   return uscup;
}

//cbfoot2usfluidounce 

function cbfoot2usfluidounce (cbfoot) {
   usfluidounce = cbfoot * 957.5
   return usfluidounce;
}

//cbfoot2ustablespoon

function cbfoot2ustablespoon (cbfoot) {
   ustablespoon = cbfoot * 1915
   return ustablespoon;
}

//cbfoot2usteaspoon

function cbfoot2usteaspoon (cbfoot) {
   usteaspoon = cbfoot * 5745
   return usteaspoon;
}

//cbfoot2impgallon

function cbfoot2impgallon (cbfoot) {
   impgallon = cbfoot * 6.229
   return impgallon;
}

//cbfoot2impquart

function cbfoot2impquart (cbfoot) {
   impquart = cbfoot * 24.915
   return impquart;
}

//cbfoot2imppint

function cbfoot2imppint (cbfoot) {
   imppint = cbfoot * 49.831
   return imppint;
}

//cbfoot2impfluidounce

function cbfoot2impfluidounce (cbfoot) {
   impfluidounce = cbfoot * 996.6
   return impfluidounce;
}

//cbfoot2imptablespoon

function cbfoot2imptablespoon (cbfoot) {
   imptablespoon = cbfoot * 1595
   return imptablespoon;
}

//cbfoot2impteaspoon

function cbfoot2impteaspoon (cbfoot) {
   impteaspoon = cbfoot * 4784
   return impteaspoon;
}

//cbfoot2cbmile

function cbfoot2cbmile (cbfoot) {
   cbmile = cbfoot / 1.472e+11
   return cbmile;
}

//cbfoot2cbyard

function cbfoot2cbyard (cbfoot) {
   cbyard = cbfoot / 27
   return cbyard;
}

//cbfoot2cbinch

function cbfoot2cbinch (cbfoot) {
   cbinch = cbfoot / 4784
   return cbinch;
}

//cbinch2cbinch

function cbinch2cbinch (cbinch) {
   cbinch = cbinch 
   return cbinch;
}

//cbinch2cbmeter

function cbinch2cbmeter (cbinch) {
   cbmeter = cbinch / 61020
   return cbmeter;
}

//cbinch2cbkm

function cbinch2cbkm (cbinch) {
   cbkm = cbinch / 6.102e+13
   return cbkm;
}

//cbinch2cbcm

function cbinch2cbcm (cbinch) {
   cbcm = cbinch * 16.387
   return cbcm;
}

//cbinch2cbmlm

function cbinch2cbmlm (cbinch) {
   cbmlm = cbinch * 16390
   return cbmlm;
}

//cbinch2liter

function cbinch2liter (cbinch) {
   liter = cbinch / 61.024
   return liter;
}

//cbinch2milliliter

function cbinch2milliliter (cbinch) {
   milliliter = cbinch * 16.387
   return  milliliter;
}

//cbinch2usgallon

function cbinch2usgallon (cbinch) {
   usgallon = cbinch / 231
   return usgallon;
}

//cbinch2usquart

function cbinch2usquart (cbinch) {
   usquart = cbinch / 57.75
   return usquart;
}

//cbinch2uspint

function cbinch2uspint (cbinch) {
   uspint = cbinch / 28.875
   return uspint;
}

//cbinch2uscup

function cbinch2uscup (cbinch) {
   uscup = cbinch / 14.438
   return uscup;
}

//cbinch2usfluidounce

function cbinch2usfluidounce (cbinch) {
   usfluidounce = cbinch / 1.805
   return usfluidounce;
}

//cbinch2ustablespoon

function cbinch2ustablespoon (cbinch) {
   ustablespoon = cbinch * 1.108
   return ustablespoon;
}

//cbinch2usteaspoon

function cbinch2usteaspoon (cbinch) {
   usteaspoon = cbinch * 3.325
   return usteaspoon;
}

//cbinch2impgallon

function cbinch2impgallon (cbinch) {
   impgallon = cbinch / 277.4
   return impgallon;
}

//cbinch2impquart

function cbinch2impquart (cbinch) {
   impquart = cbinch /  69.355
   return impquart;
}

//cbinch2imppint

function cbinch2imppint (cbinch) {
   imppint = cbinch / 34.677
   return imppint;
}

//cbinch2impfluidounce

function cbinch2impfluidounce (cbinch) {
   impfluidounce = cbinch / 1.734
   return impfluidounce;
}

//cbinch2imptablespoon

function cbinch2imptablespoon (cbinch) {
   imptablespoon = cbinch / 1.084
   return imptablespoon;
}

//cbinch2impteaspoon

function cbinch2impteaspoon (cbinch) {
   impteaspoon = cbinch * 2.768
   return impteaspoon;
}

//cbinch2cbmile

function cbinch2cbmile (cbinch) {
   cbmile = cbinch / 2.544e+14
   return cbmile;
}

//cbinch2cbyard

function cbinch2cbyard (cbinch) {
   cbyard = cbinch / 46660
   return cbyard;
}

//cbinch2cbfoot

function cbinch2cbfoot (cbinch) {
   cbfoot = cbinch / 1728
   return cbfoot;
}

//weight

//kg2kg

function kg2kg (kg) {
   kg = kg
   return kg;
}

//kg2gram

function kg2gram (kg) {
   gram = kg * 1000
   return gram;
}

//kg2milligram

function kg2milligram (kg) {
   milligram = kg * 1e+6
   return milligram;
}

//kg2metricton

function kg2metricton (kg) {
   metricton = kg / 1000
   return metricton;
}

//kg2longton

function kg2longton (kg) {
   longton = kg / 1016
   return longton;
}

//kg2shortton

function kg2shortton (kg) {
   shortton = kg / 907.2
   return shortton;
}

//kg2pound

function kg2pound (kg) {
   pound = kg * 2.205
   return pound;
}

//kg2ounce

function kg2ounce (kg) {
   ounce = kg * 35.274
   return ounce;
}

//kg2carat

function kg2carat (kg) {
   carat = kg * 5000
   return carat;
}

//kg2atomicmassunit

function kg2atomicmassunit (kg) {
   atomicmassunit = kg * 6.022e+26
   return atomicmassunit;
}

//gram2gram

function gram2gram (gram) {
   gram = gram
   return gram;
}

//gram2kg

function gram2kg (gram) {
   kg = gram / 1000
   return kg;
}

//gram2milligram

function gram2milligram (gram) {
   milligram = gram * 1000
   return milligram;
}

//gram2metricton

function gram2metricton (gram) {
   metricton = gram / 1e+6
   return metricton;
}

//gram2longton

function gram2longton (gram) {
   longton = gram / 1.1016e+6
   return longton;
}

//gram2shortton

function gram2shortton (gram) {
   shortton = gram / 907200
   return shortton;
}

//gram2pound

function gram2pound (gram) {
   pound = gram / 453.6
   return pound;
}

//gram2ounce

function gram2ounce (gram) {
   ounce = gram / 28.35
   return ounce;
}

//gram2carat

function gram2carat (gram) {
   carat = gram * 5
   return carat;
}

//gram2atomicmassunit

function gram2atomicmassunit (gram) {
   atomicmassunit = gram * 6.022e+23
   return atomicmassunit;
}

//milligram2milligram

function milligram2milligram (milligram) {
   milligram = milligram
   return milligram;
}

//milligram2kg

function milligram2kg (milligram) {
   kg = milligram / 1e+6
   return kg;
}

//milligram2gram

function milligram2gram (milligram) {
   gram = milligram / 1000
   return gram;
}

//milligram2metricton

function milligram2metricton (milligram) {
   metricton = milligram / 1e+9
   return metricton;
}

//milligram2longton

function milligram2longton (milligram) {
   longton = milligram / 1.016e+9
   return longton;
}

//milligram2shortton

function milligram2shortton (milligram) {
   shortton = milligram / 9.072e+8
   return shortton;
}

//milligram2pound

function milligram2pound (milligram) {
   pound = milligram / 453600
   return pound;
}

//milligram2ounce

function milligram2ounce (milligram) {
   ounce = milligram / 28350
   return ounce;
}

//milligram2carat

function milligram2carat (milligram) {
   carat = milligram / 200
   return carat;
}

//milligram2atomicmassunit

function milligram2atomicmassunit (milligram) {
   atomicmassunit = milligram * 6.022e+20
   return atomicmassunit;
}

//metricton2metricton

function metricton2metricton (metricton) {
   metricton = metricton
   return metricton;
}

//metricton2kg

function metricton2kg (metricton) {
   kg = metricton * 1000
   return kg;
}

//metricton2gram

function metricton2gram (metricton) {
   gram = metricton * 1e+6
   return gram;
}

//metricton2milligram

function metricton2milligram (metricton) {
   milligram = metricton * 1e+9
   return milligram;
}

//metricton2longton

function metricton2longton (metricton) {
   longton = metricton / 1.016
   return longton;
}

//metricton2shortton

function metricton2shortton (metricton) {
   shortton = metricton * 1.102
   return shortton;
}

//metricton2pound

function metricton2pound (metricton) {
   pound = metricton * 2205
   return pound;
}

//metricton2ounce

function metricton2ounce (metricton) {
   ounce = metricton * 35270
   return ounce;
}

//metricton2carat

function metricton2carat (metricton) {
   carat = metricton * 5e+6
   return carat;
}

//metricton2atomicmassunit

function metricton2atomicmassunit (metricton) {
   atomicmassunit = metricton * 6.022e+9
   return atomicmassunit;
}

//longton2longton

function longton2longton (longton) {
   longton = longton
   return longton;
}

//longton2kg

function longton2kg (longton) {
   kg = longton * 1016
   return kg;
}

//longton2gram

function longton2gram (longton) {
   gram = longton * 1.016e+6
   return gram;
}

//longton2milligram

function longton2milligram (longton) {
   milligram = longton * 1.016e+9
   return milligram;
}

//longton2metricton

function longton2metricton (longton) {
   metricton = longton * 1.016
   return metricton;
}

//longton2shortton

function longton2shortton (longton) {
   shortton = longton * 1.12
   return shortton;
}

//longton2pound

function longton2pound (longton) {
   pound = longton * 2240
   return pound;
}

//longton2ounce

function longton2ounce (longton) {
   ounce = longton * 35840
   return ounce;
}

//longton2carat

function longton2carat (longton) {
   carat = longton * 5.08e+6
   return carat;
}

//longton2atomicmassunit

function longton2atomicmassunit (longton) {
   atomicmassunit = longton * 6.119e+29
   return atomicmassunit;
}

//shortton2shortton

function shortton2shortton (shortton) {
   shortton = shortton
   return shortton;
}

//shortton2kg

function shortton2kg (shortton) {
   kg = shortton * 907.2
   return kg;
}

//shortton2gram

function shortton2gram (shortton) {
   gram = shortton * 907200
   return gram;
}

//shortton2milligram

function shortton2milligram (shortton) {
   milligram = shortton * 9.072e+8
   return milligram;
}

//shortton2smetricton

function shortton2smetricton (shortton) {
   metricton = shortton / 1.102
   return metricton;
}

//shortton2longton

function shortton2longton (shortton) {
   longton = shortton / 1.12
   return longton;
}

//shortton2pound

function shortton2pound (shortton) {
   pound = shortton * 2000
   return pound;
}

//shortton2ounce

function shortton2ounce (shortton) {
   ounce = shortton * 32000
   return ounce;
}

//shortton2carat

function shortton2carat (shortton) {
   carat = shortton * 4.536e+6
   return carat;
}

//shortton2atomicmassunit

function shortton2atomicmassunit (shortton) {
   atomicmassunit = shortton * 5.463e+29
   return atomicmassunit;
}

//pound2pound

function pound2pound (pound) {
   pound = pound
   return pound;
}

//pound2kg

function pound2kg (pound) {
   kg = pound / 2.205
   return kg;
}

//pound2gram

function pound2gram (pound) {
   gram = pound * 453.6
   return gram;
}

//pound2milligram

function pound2milligram (pound) {
   milligram = pound * 453600
   return milligram;
}

//pound2metricton

function pound2metricton (pound) {
   metricton = pound / 2205
   return metricton;
}

//pound2longton

function pound2longton (pound) {
   longton = pound / 2240
   return longton;
}

//pound2shortton

function pound2shortton (pound) {
   shortton = pound / 2000
   return shortton;
}

//pound2ounce

function pound2ounce (pound) {
   ounce = pound * 16
   return ounce;
}

//pound2carat

function pound2carat (pound) {
   carat = pound * 2268
   return carat;
}

//pound2atomicmassunit

function pound2atomicmassunit (pound) {
   atomicmassunit = pound * 2.732e+26
   return atomicmassunit;
}

//ounce2ounce

function ounce2ounce (ounce) {
   ounce = ounce 
   return ounce;
}

//ounce2kg

function ounce2kg (ounce) {
   kg = ounce / 35.274
   return kg;
}

//ounce2gram

function ounce2gram (ounce) {
   gram = ounce * 28.35
   return gram;
}

//ounce2milligram

function ounce2milligram (ounce) {
   milligram = ounce * 28350
   return milligram;
}

//ounce2metricton

function ounce2metricton (ounce) {
   metricton = ounce / 35270
   return metricton;
}

//ounce2longton

function ounce2longton (ounce) {
   longton = ounce / 36840
   return longton;
}

//ounce2shortton

function ounce2shortton (ounce) {
   shortton = ounce / 32000
   return shortton;
}

//ounce2pound

function ounce2pound (ounce) {
   pound = ounce / 16
   return pound;
}

//ounce2carat

function ounce2carat (ounce) {
   carat = ounce * 141.7
   return carat;
}

//ounce2atomicmassunit

function ounce2atomicmassunit (ounce) {
   atomicmassunit = ounce * 1.707e+25 
   return atomicmassunit;
}

//carat2carat

function carat2carat (carat) {
   carat = carat
   return carat;
}

//carat2kg

function carat2kg (carat) {
   kg = carat / 5000
   return kg;
}

//carat2gram

function carat2gram (carat) {
   gram = carat / 5
   return gram;
}

//carat2milligram

function carat2milligram (carat) {
   milligram = carat * 200
   return milligram;
}

//carat2metricton

function carat2metricton (carat) {
   metricton = carat / 5e+6
   return metricton;
}

//carat2longton

function carat2longton (carat) {
   longton = carat / 5.08e+6
   return longton;
}

//carat2shortton

function carat2shortton (carat) {
   shortton = carat / 4.536e+6
   return shortton;
}

//carat2pound

function carat2pound (carat) {
   pound = carat / 2268
   return pound;
}

//carat2ounce

function carat2ounce (carat) {
   ounce = carat / 141.7
   return ounce;
}

//carat2atomicmassunit

function carat2atomicmassunit (carat) {
   atomicmassunit = carat * 1.204e+23
   return atomicmassunit;
}

//atomicmassunit2atomicmassunit

function atomicmassunit2atomicmassunit (atomicmassunit) {
   atomicmassunit = atomicmassunit
   return atomicmassunit;
}

//atomicmassunit2kg

function atomicmassunit2kg (atomicmassunit) {
   kg = atomicmassunit / 6.022e+26
   return kg;
}

//atomicmassunit2gram

function atomicmassunit2gram (atomicmassunit) {
   gram = atomicmassunit / 6.022e+23
   return gram;
}

//atomicmassunit2milligram

function atomicmassunit2milligram (atomicmassunit) {
   milligram = atomicmassunit / 6.022e+20
   return milligram;
}

//atomicmassunit2metricton

function atomicmassunit2metricton (atomicmassunit) {
   metricton = atomicmassunit / 6.022e+29
   return metricton;
}

//atomicmassunit2longton

function atomicmassunit2longton (atomicmassunit) {
   longton = atomicmassunit / 6.119e+29
   return longton;
}

//atomicmassunit2shortton

function atomicmassunit2shortton (atomicmassunit) {
   shortton = atomicmassunit / 5.463e+29
   return shortton;
}

//atomicmassunit2pound

function atomicmassunit2pound (atomicmassunit) {
   pound = atomicmassunit / 2.732e+26
   return pound;
}

//atomicmassunit2ounce

function atomicmassunit2ounce (atomicmassunit) {
   ounce = atomicmassunit / 1.707e+25
   return ounce;
}

//atomicmassunit2carat

function atomicmassunit2carat (atomicmassunit) {
   carat = atomicmassunit / 1.204e+23
   return carat;
}


//time

//scnd2scnd

function scnd2scnd (second) {
   second = second
   return second;
}

//scnd2milliscnd

function scnd2milliscnd (second) {
   millisecond = second * 1000
   return millisecond;
}

//scnd2nanoscnd

function scnd2nanoscnd (second) {
   nanosecond = second * 1e+9
   return nanosecond;
}

//scnd2microscnd

function scnd2microscnd (second) {
   microsecond = second * 1e+6
   return microsecond;
}

//scnd2picosecond

function scnd2picosecond (second) {
   picosecond = second * 1e+12
   return picosecond;
}

//scnd2mint

function scnd2mint (second) {
   mint = second / 60
   return mint;
}

//scnd2hour

function scnd2hour (second) {
   hour = second / 3600
   return hour;
}

//scnd2day

function scnd2day (second) {
   day = second / 86400
   return day;
}

//scnd2week

function scnd2week (second) {
   week = second / 604800
   return week;
}

//scnd2month

function scnd2month (second) {
    month = second / 2.628e+6
   return month;
}

//scnd2year

function scnd2year (second) {
   year = second / 3.154e+7
   return year;
}

//millisecond2second

function millisecond2second (millisecond) {
   second = millisecond / 1000
   return second;
}

//millisecond2microsecond

function millisecond2microsecond (millisecond) {
   microsecond = millisecond * 1000
   return microsecond;
}

//millisecond2nanosecond

function millisecond2nanosecond (millisecond) {
   nanosecond = millisecond * 1e+6
   return nanosecond;
}

//millisecond2picosecond

function millisecond2picosecond (millisecond) {
   picosecond = millisecond * 1e+9
   return picosecond;
}

//millisecond2mint

function millisecond2mint (millisecond) {
   mint = millisecond / 60000
   return mint;
}

//millisecond2hour

function millisecond2hour (millisecond) {
   hour = millisecond / 3.6e+6
   return hour;
}

//millisecond2day

function millisecond2day (millisecond) {
   day = millisecond / 8.64e+7
   return day;
}

//millisecond2week

function millisecond2week (millisecond) {
   week = millisecond / 6.048e+8
   return week;
}

//millisecond2month

function millisecond2month (millisecond) {
   month = millisecond / 2.628e+9
   return month;
}

//millisecond2year

function millisecond2year (millisecond) {
   year = millisecond / 3.154e+10
   return year;
}

//millisecond2millisecond

function millisecond2millisecond (millisecond) {
   millisecond = millisecond
   return millisecond;
}

//microsecond2second

function microsecond2second (microsecond) {
   second = microsecond / 1e+6
   return second;
 }

 //microsecond2millisecond

function microsecond2millisecond (microsecond) {
   millisecond = microsecond / 1000
   return millisecond;
 }

 //microsecond2nanosecond

function microsecond2nanosecond (microsecond) {
   nanosecond = microsecond * 1000
   return nanosecond;
 }

 //microsecond2picosecond

function microsecond2picosecond (microsecond) {
   picosecond = microsecond * 1e+6
   return picosecond;
 }

 //microsecond2mint

function microsecond2mint (microsecond) {
   mint = microsecond / 6e+7
   return mint;
 }

 //microsecond2hour

function microsecond2hour (microsecond) {
   hour = microsecond / 3.6e+9
   return hour;
 }

 //microsecond2day 

function microsecond2day (microsecond) {
   day = microsecond / 8.64e+10
   return  day;
 }

 //microsecond2week

function microsecond2week (microsecond) {
   week = microsecond / 6.048e+11
   return week;
 }

 //microsecond2month

function microsecond2month (microsecond) {
   month = microsecond / 2.628e+12
   return month;
 }

 //microsecond2year

function microsecond2year (microsecond) {
   year = microsecond / 3.154e+13
   return year;
 }

 //microsecond2microsecond

function microsecond2microsecond (microsecond) {
   microsecond = microsecond
   return microsecond;
 }

//nanosecond2nanosecond

function nanosecond2nanosecond (nanosecond) {
   nanosecond = nanosecond
   return nanosecond;
}

//nanosecond2second

function nanosecond2second (nanosecond) {
   second = nanosecond / 1e+9
   return second;
}

//nanosecond2millisecond

function nanosecond2millisecond (nanosecond) {
   millisecond = nanosecond / 1e+6
   return millisecond;
}

//nanosecond2microsecond

function nanosecond2microsecond (nanosecond) {
   microsecond = nanosecond / 1000
   return microsecond;
}

//nanosecond2picosecond

function nanosecond2picosecond (nanosecond) {
   picosecond = nanosecond * 1000
   return picosecond;
}

//nanosecond2mint

function nanosecond2mint (nanosecond) {
   mint = nanosecond / 6e+10
   return mint;
}

//nanosecond2hour

function nanosecond2hour (nanosecond) {
   hour = nanosecond / 3.6e+15
   return hour;
}

//nanosecond2day

function nanosecond2day (nanosecond) {
   day = nanosecond / 8.64e+13
   return day;
}

//nanosecond2week

function nanosecond2week (nanosecond) {
   week = nanosecond / 6.048e+14
   return week;
}

//nanosecond2month

function nanosecond2month (nanosecond) {
   month = nanosecond / 2.628e+15
   return month;
}

//nanosecond2year

function nanosecond2year (nanosecond) {
   year = nanosecond / 3.154e+16
   return year;
}

//picosecond2picosecond

function picosecond2picosecond (picosecond) {
   picosecond = picosecond
   return picosecond;
}

//picosecond2second

function picosecond2second (picosecond) {
   second = picosecond / 1e+12
   return second;
}

//picosecond2millisecond

function picosecond2millisecond (picosecond) {
   millisecond = picosecond / 1e+9
   return millisecond;
}

//picosecond2microsecond

function picosecond2microsecond (picosecond) {
   microsecond = picosecond / 1e+6
   return microsecond;
}

//picosecond2nanosecond

function picosecond2nanosecond (picosecond) {
   nanosecond = picosecond / 1000
   return nanosecond;
}

//picosecond2mint

function picosecond2mint (picosecond) {
   mint = picosecond / 6e+13
   return mint;
}

//picosecond2hour

function picosecond2hour (picosecond) {
   hour = picosecond / 3.6e+15
   return hour;
}

//picosecond2day

function picosecond2day (picosecond) {
   day = picosecond / 8.64e+16
   return day;
}

//picosecond2week

function picosecond2week (picosecond) {
   week = picosecond / 6.048e+17
   return week;
}

//picosecond2month

function picosecond2month (picosecond) {
   month = picosecond / 2.628e+18
   return month;
}

//picosecond2year

function picosecond2year (picosecond) {
   year = picosecond / 3.154e+19
   return year;
}

//mint2mint

function mint2mint (mint) {
   mint = mint
   return mint;
}

//mint2second

function mint2second (mint) {
   second = mint * 60
   return second;
}

//mint2millisecond

function mint2millisecond (mint) {
   millisecond = mint * 60000
   return millisecond;
}

//mint2microsecond

function mint2microsecond (mint) {
   microsecond = mint * 6e+7
   return microsecond;
}

//mint2nanosecond

function mint2nanosecond (mint) {
   nanosecond = mint * 6e+10
   return nanosecond;
}

//mint2picosecond

function mint2picosecond (mint) {
   picosecond = mint * 6e+15
   return picosecond;
}

//mint2hour

function mint2hour (mint) {
   hour = mint / 60
   return hour;
}

//mint2day

function mint2day (mint) {
   day = mint / 1440
   return day;
}

//mint2week

function mint2week (mint) {
   week = mint / 10080
   return week;
}

//mint2month

function mint2month (mint) {
   month = mint / 43800
   return month;
}

//mint2year

function mint2year (mint) {
   year = mint / 525600
   return year;
}

//hour2hour

function hour2hour (hour) {
   hour = hour 
   return hour;
}

//hour2second

function hour2second (hour) {
   second = hour * 3600
   return second;
}

//hour2millisecond

function hour2millisecond (hour) {
   millisecond = hour * 3.6e+6
   return millisecond;
}

//hour2microsecond

function hour2microsecond (hour) {
   microsecond = hour * 3.6e+9
   return microsecond;
}

//hour2nanosecond

function hour2nanosecond (hour) {
   nanosecond = hour * 3.6e+12
   return nanosecond;
}

//hour2picosecond

function hour2picosecond (hour) {
   picosecond = hour * 3.6e+15
   return picosecond;
}

//hour2mint

function hour2mint (hour) {
   mint = hour * 60
   return mint;
}

//hour2day

function hour2day (hour) {
   day = hour / 24
   return day;
}

//hour2week

function hour2week (hour) {
   week = hour / 168
   return week;
}

//hour2month

function hour2month (hour) {
   month = hour / 730
   return month;
}

//hour2year

function hour2year (hour) {
   year = hour / 8760
   return year;
}

//day2day

function day2day (day) {
   day = day
   return day;
}

//day2second

function day2second (day) {
   second = day * 86400
   return second;
}

//day2millisecond

function day2millisecond (day) {
   millisecond = day * 8.64e+7
   return millisecond;
}

//day2microsecond

function day2microsecond (day) {
   microsecond = day * 8.64e+10
   return microsecond;
}

//day2nanosecond

function day2nanosecond (day) {
   nanosecond = day * 8.64e+13
   return nanosecond;
}

//day2picosecond

function day2picosecond (day) {
   picosecond = day * 8.64e+16
   return picosecond;
}

//day2mint

function day2mint (day) {
   mint = day * 1440
   return mint;
}

//day2hour

function day2hour (day) {
   hour = day * 24
   return hour;
}

//day2week

function day2week (day) {
   week = day / 7
   return week;
}

//day2month

function day2month (day) {
   month = day / 30.417
   return month;
}

//day2year

function day2year (day) {
   year = day / 365
   return year;
}

//week2week

function week2week (week) {
   week = week
   return week;
}

//week2second

function week2second (week) {
   second = week * 604800
   return second;
}

//week2millisecond

function week2millisecond (week) {
   millisecond = week * 6.048e+8
   return millisecond;
}

//week2microsecond

function week2microsecond (week) {
   microsecond = week * 6.048e+11
   return microsecond;
}

//week2nanosecond

function week2nanosecond (week) {
   nanosecond = week * 6.048e+14
   return nanosecond;
}

//week2picosecond

function week2picosecond (week) {
   picosecond = week * 6.048e+17
   return picosecond;
}

//week2mint

function week2mint (week) {
   mint = week * 10080
   return mint;
}

//week2hour

function week2hour (week) {
   hour = week * 168
   return hour;
}

//week2day

function week2day (week) {
   day = week * 7
   return day;
}

//week2month

function week2month (week) {
   month = week / 4.345
   return month;
}

//week2year

function week2year (week) {
   year = week / 52.143
   return year;
}

//month2month

function month2month (month) {
   month = month
   return month;
}

//month2second

function month2second (month) {
   second = month * 2.628e+6
   return second;
}

//month2millisecond

function month2millisecond (month) {
   millisecond = month * 2.628e+9
   return millisecond;
}

//month2microsecond

function month2microsecond (month) {
   microsecond = month * 2.628e+15
   return microsecond;
}

//month2nanosecond

function month2nanosecond (month) {
   nanosecond = month * 2.628e+15
   return nanosecond;
}

//month2picosecond

function month2picosecond (month) {
   picosecond = month * 2.628e+18
   return picosecond;
}

//month2mint

function month2mint (month) {
   mint = month * 43800
   return mint;
}

//month2hour

function month2hour (month) {
   hour = month * 730
   return hour;
}

//month2day

function month2day (month) {
   day = month * 30.417
   return day;
}

//month2week

function month2week (month) {
   week = month * 4.345
   return week;
}

//month2year

function month2year (month) {
   year = month / 12
   return year;
}

//year2year

function year2year (year) {
   year = year
   return year;
}

//year2second

function year2second (year) {
   second = year * 3.154e+7
   return second;
}

//year2millisecond

function year2millisecond (year) {
   millisecond = year * 3.154e+10
   return millisecond;
}

//year2microsecond

function year2microsecond (year) {
   microsecond = year * 3.154e+13
   return microsecond;
}

//year2nanosecond

function year2nanosecond (year) {
   nanosecond = year * 3.154e+16
   return nanosecond;
}

//year2picosecond

function year2picosecond (year) {
   picosecond = year * 3.154e+19
   return picosecond;
}

//year2mint

function year2mint (year) {
   mint = year * 525600
   return mint;
}

//year2hour

function year2hour (year) {
   hour = year * 6760
   return hour;
}

//year2day

function year2day (year) {
   day = year * 365
   return day;
}

//year2week

function year2week (year) {
   week = year * 52.143
   return week;
}

//year2month

function year2month (year) {
   month = year * 12
   return month;
}
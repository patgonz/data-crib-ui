  // render() {
  //   const styleInfo = {
  //     paddingRight: '10px'
  //   }
  //   const items = MockList.filter((data) => {
  //     if (this.state.search == null)
  //       return data
  //     else if (data.organization.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())) {
  //       return data
  //     }
  //   }).map(data => {
  //     return (
  //       <div>
  //         <ul>
  //           <li style={{ position: 'relative', left: '10vh' }}>
  //             <span style={styleInfo}>{data.organization}</span>
  //             <span style={styleInfo}>{data.city}</span>
  //             <span style={styleInfo}>{data.country}</span>
  //           </li>
  //         </ul>
  //       </div>
  //     )
  //   })
  // }

  

const ValidateIPaddress = (ipaddress) => {
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
    return (true)
  }
  //alert("You have entered an invalid IP address!")
  return (false)
}

//return an array of objects according to key, value, or key and value matching
const getObjects = (obj, key, val) => {
  var objects = [];
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (typeof obj[i] == 'object') {
      objects = objects.concat(getObjects(obj[i], key, val));
    } else
      //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
      if (i == key && obj[i] == val || i == key && val == '') { //
        objects.push(obj);
      } else if (obj[i] == val && key == '') {
        //only add if the object is not already in the array
        if (objects.lastIndexOf(obj) == -1) {
          objects.push(obj);
        }
      }
  }
  return objects;
}


    // var jsonString = require('./components/data/MOCK_DATA.json');
    // var parsedJSON = JSON.stringify(jsonString);
    // var ipObject = document.getElementById("ipSearchString");
    // var ipObjectValue = document.getElementById("ipSearchString").value;
    // if (document.getElementById("ipSearchString").value == '' || ValidateIPaddress(document.getElementById("ipSearchString").value)) {
    //   //var test = axios.get('components/data/MOCK_DATA.json');
    //   //axios.get('http://ip-api.com/json/' + document.getElementById("ipSearchString").value)
    //   //axios.get('components/data/MOCK_DATA.json' + document.getElementById("ipSearchString").value)
    //   // var test = fetch("components/data/MOCK_DATA.json")
    //   // .then((resp) => resp.json())
    //   // .then((data) => {
    //   //     console.log(data);
    //   //   });

    //   // testing below .... 
    //   var response = jsonString.filter(obj => {
    //     return obj.ip_address === ipObjectValue
    //   })
    //   //var response = getObjects(parsedJSON, "ip_address", document.getElementById("ipSearchString").value)  //parsedJSON.getElementById("ip_address").value(test)
    //   //.then((response => {
    //   document.getElementById("org").innerText = "Organization: " + response[0].organization;
    //   document.getElementById("country").innerText = "Country: " + response[0].country;
    //   //document.getElementById("countryCode").innerText = "Country Code: " + response.data.countryCode;
    //   //document.getElementById("region").innerText = "Region: " + response.data.region;
    //   //document.getElementById("regionName").innerText = "Region Name: " + response.data.regionName;
    //   document.getElementById("city").innerText = "City: " + response[0].city;
    //   //document.getElementById("zip").innerText = "ZIP: " + response.data.zip;
    //   //document.getElementById("lat").innerText = "Lat: " + response.data.lat;
    //   //document.getElementById("lon").innerText = "Lon: " + response.data.lon;
    //   //document.getElementById("timezone").innerText = "Time Zone: " + response.data.timezone;
    //   //document.getElementById("isp").innerText = "ISP: " + response.data.isp;
    //   //document.getElementById("org").innerText = "Org: " + response.data.org;
    //   //document.getElementById("as").innerText = "AS: " + response.data.as;
    //   //}
    //   //)
    //   //); 
    // }
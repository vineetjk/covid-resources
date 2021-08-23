let data = {
    mudhol: {
        0: {
            name: "Mudhol Govt Hospital",
            beds: 20,
            oxi: 10,
            venti: 5,
        },
        1: {
            name: "Talati Hospital",
            beds: 10,
            oxi: 3,
            venti: 1,
        },
    },
    bangalore: {
        0: {
            name: "Bangalore Govt Hospital",
            beds: 105,
            oxi: 55,
            venti: 20,
        },
        1: {
            name: "Bangalore Mediacal College Hospital",
            beds: 111,
            oxi: 62,
            venti: 33,
        },
        2: {
            name: "Columbia Asia Hospital",
            beds: 76,
            oxi: 25,
            venti: 12,
        },
        3: {
            name: "Ramaiah Memorial Hospital",
            beds: 89,
            oxi: 65,
            venti: 17,
        }

    }
};


function fetchdetails() {
    var city = document.getElementById('city').value.toLowerCase();
    var htmldata = "<h3>Showing results for <b> " + city + "</b></h3>";
    if (city in data) {
        var d = data[city];
        for (var key of Object.keys(d)) {
            console.log(key + " -> " + d[key])
            htmldata = htmldata + `<div class="data-card">
                                 <h4>   ${d[key].name}</h4> <br>
                                   <h3> Available Resouces </h3><br>
                                       <h3> <b>Beds: <span class="rec-card">${d[key].beds}</span> </b></h3><br>
                                       <h3> <b> Oxigen Beds: <span class="rec-card">${d[key].oxi}</span> </b></h3><br> 
                                       <h3> <b> Ventilator: <span class="rec-card">${d[key].venti}</span> 
                                        </b></h3></div>`;
        }
        document.getElementById("display-here").innerHTML = htmldata;

    } else {
        alert("No data available for the city : " + city);
    }

}


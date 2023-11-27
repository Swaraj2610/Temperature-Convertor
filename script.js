 let celsius = document.getElementById("Celsius");
      let fahrenheit = document.getElementById("Fahrenheit");
      let kelvin = document.getElementById("Kelvin");

      celsius.oninput = function () {
        var a = this.value;
        let f = (parseFloat(a) * 9) / 5 + 32;
        fahrenheit.value = parseFloat(f.toFixed(4));

        let k = parseFloat(celsius.value) + 273.15;
        kelvin.value = parseFloat(k.toFixed(4));
      };

      fahrenheit.oninput = function () {
        var a = this.value;
        let c = ((parseFloat(a) - 32) * 5) / 9;
        celsius.value = parseFloat(c.toFixed(4));

        let k = ((parseFloat(a) - 32) * 5) / 9 + 273.15;
        kelvin.value = parseFloat(k.toFixed(4));
      };
      
      kelvin.oninput = function () {
        var a = this.value;
        let f = ((parseFloat(a) - 273.15) * 9) / 5 + 32;
        fahrenheit.value = parseFloat(f.toFixed(4));

        let c = parseFloat(a) - 273.15;
        celsius.value = parseFloat(c.toFixed(4));
      };
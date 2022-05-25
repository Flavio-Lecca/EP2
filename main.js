

function onDocumentLoaded(){
    const divRoot = document.getElementById("root");
    console.log(divRoot);

    const titulo = document.createElement("h1");
    titulo.innerHTML = "Amortización Sistema Francés";
    titulo.style.textAlign = "center";
    divRoot.appendChild(titulo);

    const parrafo1 = document.createElement("h4");
    parrafo1.innerHTML = "La amortización por el sistema francés, se caracteriza por cuotas iguales, valores de amortización del principal e interés creciente. Para calcular los pagos mensuales introduzca: El principal, el plazo en meses y la tasa de interés mensual. Utilice el punto como separador decimal. Por ejemplo: 25.152,47; se escribe 25152.47; Los resultados aparecerán de forma automática, después de pinchar en 'Calcular'";
    parrafo1.style.paddingLeft = "100px";
    parrafo1.style.paddingRight = "100px";
    parrafo1.style.paddingTop = "30px";
    parrafo1.style.paddingBottom = "50px";
    divRoot.appendChild(parrafo1);
    
    const tabla = document.createElement("table");
    tabla.style.marginLeft = "100px";

    //thead
    const head = document.createElement("thead");
    head.style.background = "blue";
    tabla.appendChild(head);

    const thet = document.createElement("tr");
    head.appendChild(thet);

    const headinfo = document.createElement("th");
    headinfo.innerHTML = "Amortización Sistema Francés";
    headinfo.style.color = "white";
    headinfo.style.textAlign = "center";
    headinfo.colSpan = "2";
    thet.appendChild(headinfo);

    //tbody
    const tablahead = document.createElement("tbody");
    tabla.appendChild(tablahead);
    //primera fila
    const fila1 = document.createElement("tr");
    tablahead.appendChild(fila1);

    const columna1 = document.createElement("td");
    columna1.innerHTML = "Principal:";
    fila1.appendChild(columna1);

    const columna2 = document.createElement("td");
    columna2.innerHTML = "<input id='monto'>";
    fila1.appendChild(columna2);
    //segunda fila
    const fila2 = document.createElement("tr");
    tablahead.appendChild(fila2);

    const column1 = document.createElement("td");
    column1.innerHTML = "Plazo en meses:";
    fila2.appendChild(column1);

    const column2 = document.createElement("td");
    column2.innerHTML = "<input id='tiempo'>";
    fila2.appendChild(column2);
    //tercera fila
    const fila3 = document.createElement("tr");
    tablahead.appendChild(fila3);

    const colum1 = document.createElement("td");
    colum1.innerHTML = "Tasa de interés mensual:";
    fila3.appendChild(colum1);

    const colum2 = document.createElement("td");
    colum2.innerHTML = "<input id='interes'>";
    fila3.appendChild(colum2);
    //cuarta fila
    const fila4 = document.createElement("tr");
    tablahead.appendChild(fila4);

    const colu1 = document.createElement("td");
    colu1.innerHTML = "<button class='btn btn-sm' style='border-color:black' id='calcular'>Calcular</button>";
    fila4.appendChild(colu1);

    const colu2 = document.createElement("td");
    colu2.innerHTML = "<button class='btn btn-sm' style='border-color:black' id='limpiar'>Reset</button>";
    fila4.appendChild(colu2);
    //quinta fila
    const fila5 = document.createElement("tr");
    tablahead.appendChild(fila5);

    const col1 = document.createElement("td");
    col1.innerHTML = "Pago mensual:";
    fila5.appendChild(col1);

    const col2 = document.createElement("td");
    col2.innerHTML = "<input type='text' id='cuotames'>";
    fila5.appendChild(col2);
    //sexta fila
    const fila6 = document.createElement("tr");
    tablahead.appendChild(fila6);

    const co1 = document.createElement("td");
    co1.innerHTML = "Total interés:";
    fila6.appendChild(co1);

    const co2 = document.createElement("td");
    co2.innerHTML = "<input type='text' id='inteTotal'>";
    fila6.appendChild(co2);
    //septimo fila
    const fila7 = document.createElement("tr");
    tablahead.appendChild(fila7);

    const c1 = document.createElement("td");
    c1.innerHTML = "Total pagos:";
    fila7.appendChild(c1);

    const c2 = document.createElement("td");
    c2.innerHTML = "<input type='text' id='pagototal'>";
    fila7.appendChild(c2);
    //tfoot
    const tablafoot = document.createElement("tfoot");
    tabla.appendChild(tablafoot);

    const foot = document.createElement("tr");
    tablafoot.appendChild(foot);

    const footinfo = document.createElement("th");
    footinfo.innerHTML = "Tabla de Amortización";
    footinfo.style.color = "blue";
    footinfo.style.textAlign = "center";
    footinfo.colSpan = "2";
    foot.appendChild(footinfo);
    //crear segunda tabla
    const tabla2 = document.createElement("table");
    tabla2.style.marginLeft = "100px";
    tabla2.style.marginTop = "50px";

    const tahead = document.createElement("thead");
    tabla2.appendChild(tahead);

    const row = document.createElement("tr");
    row.innerHTML = `
    <th>Parc</th>
    <th>Amort</th>
    <th>Interes</th>
    <th>Pago</th>
    <th>Saldo</th>
    `;
    tahead.appendChild(row);

    const tabody = document.createElement("tbody");
    tabody.id = "lista";
    tabla2.appendChild(tabody);

    console.log(tabla2);


    divRoot.appendChild(tabla);
    divRoot.appendChild(tabla2);
    //amortizacion
    const monto = document.getElementById('monto');
    const tiempo = document.getElementById('tiempo');
    const interes = document.getElementById('interes');
    const btnCalcular = document.getElementById('calcular');
    const btnLimpiar = document.getElementById('limpiar');
    const llenarTabla = document.querySelector('#lista');

    btnCalcular.addEventListener('click', () => {
        calcularCuota(monto.value, interes.value, tiempo.value);
        calcularPago(cuotames.value);
        calcularInteres(monto.value, pagototal.value);
    })

    function calcularCuota(monto, interes, tiempo){
        let pagoInteres=0, pagoCapital=0, cuota=0;

        cuota = monto * (Math.pow(1+interes/100, tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1);
        document.getElementById('cuotames').value = cuota.toFixed(2);

        for(let i=1;i <= tiempo; i++){
            pagoInteres = parseFloat(monto*(interes/100));
            pagoCapital = cuota - pagoInteres;
            monto = parseFloat(monto-pagoCapital);

            const rows = document.createElement('tr');
            rows.style.padding="15px";
            rows.innerHTML = `
            <th></th>
            <th>${pagoCapital.toFixed(2)}</th>
            <th>${pagoInteres.toFixed(2)}</th>
            <th>${cuota.toFixed(2)}</th>
            <th>${monto.toFixed(2)}</th>
            `;
            llenarTabla.appendChild(rows);
        }
        console.log(cuota);
    }
    
    function calcularPago(cuotames){
        let pagar=0;

        pagar = cuotames*12;
        document.getElementById('pagototal').value = pagar.toFixed(2);
    }
    
    function calcularInteres(monto, pagototal){
        let interTotal=0;

        interTotal = pagototal-monto;
        document.getElementById('inteTotal').value = interTotal.toFixed(2);
    }

    btnLimpiar.addEventListener('click', () => {
        limpiarInputs();
    })

    function limpiarInputs(){
        document.getElementById('monto').value = "";
        document.getElementById('tiempo').value = "";
        document.getElementById('interes').value = "";
        document.getElementById('cuotames').value = "";
        document.getElementById('pagototal').value = "";
        document.getElementById('inteTotal').value = "";

    }
    

}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);


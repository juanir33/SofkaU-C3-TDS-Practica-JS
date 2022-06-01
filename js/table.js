import {sorted} from './db/data.js';
import { sortedTableByAgeMax, sortedTableByAgeMin } from './helpers/sortTableAge.js';

import { sortedTableByNameAz, sortedTableByNameZa } from './helpers/sortTableName.js';
import { sortedTableByLastNameAz, sortedTableByLastNameZa } from './helpers/sortTableLastName.js';



const listData = sorted;
console.log(listData);

const titulos = [{
    nombre:'Nombre',
    btn: sortedTableByNameAz,
    btnDown: sortedTableByNameZa,
},{
    nombre:'Apellido',
    btn: sortedTableByLastNameAz,
    btnDown: sortedTableByLastNameZa,


},
{nombre:'Edad',
btn: sortedTableByAgeMin,
btnDown: sortedTableByAgeMax},
{nombre:'Email',
},
{nombre:'Telefono',
btn: "",
btnDown: ""} ]


export const table = ()=>{
  
    const container = document.querySelector('#container');
    container.classList.add( 'container', 'd-flex', 'flex-column');

    const titleH1 = document.createElement('h1');
    titleH1.textContent = 'SofkaU-C3-Training desarrollo-JavasCript';
    titleH1.classList.add( 'h1', 'text-center', 'font-monospace', 'text-primary');

    const tableContainer = document.createElement('table');
    tableContainer.classList.add('table', 'table-info' ,'table-striped', 'mt-5');
    const tableHead = document.createElement('thead');

    const tableRowTitle = document.createElement('tr');
    

    const tableBody = document.createElement('tbody')

    titulos.forEach(titulo =>{
        let th = document.createElement('th');
        let btn = document.createElement('button');
        btn.classList.add('btn', 'btn-succes-sm');
        btn.innerHTML = '&#9650';
        btn.onclick = titulo.btn;
        !titulo.btn? btn.classList.add('d-none') : '';
        let btnDown = document.createElement('button');
        btnDown.classList.add('btn', 'btn-succes-sm');
        btnDown.innerHTML = '&#9660';
        btnDown.onclick = titulo.btnDown;
        !titulo.btnDown? btnDown.classList.add('d-none') : '';

        
        
        th.textContent = titulo.nombre;
        th.append(btn, btnDown);
        tableRowTitle.appendChild(th);

    })

    

    listData.forEach(list =>{
        let row = document.createElement('tr');
        
        let tdName = document.createElement('td');
        let tdLastName = document.createElement('td');
        let tdAge = document.createElement('td');
        let tdMail = document.createElement('td');
        let tdPhoneNumber = document.createElement('td');
        
        tdName.textContent = list.nombre;
        tdLastName.textContent = list.apellidos;
        tdAge.textContent = list.edad;
        tdMail.textContent = list.email;
        tdPhoneNumber.textContent = list.telefono;
        
        row.append(tdName, tdLastName, tdAge, tdMail, tdPhoneNumber);

        tableBody.appendChild(row)

    });
     
    tableHead.appendChild(tableRowTitle);

    tableContainer.append( tableHead , tableBody);
    container.append(titleH1, tableContainer);

   

  


   
    
   

    
  
   


    















}

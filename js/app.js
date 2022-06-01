import {table}  from './table.js';
import { sortedTableByNameAz, sortedTableByNameZa} from './helpers/sortTableName.js';
import { sortedTableByLastNameAz, sortedTableByLastNameZa} from './helpers/sortTableLastName.js'
import {data} from './db/data.js';
import { sortedTableByAgeMax, sortedTableByAgeMin } from './helpers/sortTableAge.js';


    table();
    
    
   
    //sortedTableByNameAz(data);
    //sortedTableByNameZa(data)

    //sortedTableByLastNameAz(data);
    //sortedTableByLastNameZa(data);
    sortedTableByAgeMax(data);
    //sortedTableByAgeMin(data);

    
    



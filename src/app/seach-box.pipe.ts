import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './interface/product';

@Pipe({
  name: 'seachBox'
})
export class SeachBoxPipe implements PipeTransform {

  transform(data:IProduct[],searchText:string): any {
    return data.filter(item=>item.name.toLowerCase().includes(searchText.toLowerCase()));
  }

}

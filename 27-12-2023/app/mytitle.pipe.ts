import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mytitle'
})
export class MytitlePipe implements PipeTransform {

  transform(name: string, gender: string,salary?:number): string {
    if (gender.toLowerCase() == "male")
        return "Mr. " + name + "-"+salary;
    else
        return "Miss. " + name;
  }


}

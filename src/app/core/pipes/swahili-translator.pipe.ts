import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swahiliTranslation'
})
export class SwahiliTranslationPipe implements PipeTransform {
  transform(value: string): string {
    const keywords = ['Fast', 'Family', 'Rings'];
    const translations: { [key: string]: string } = {
      Fast: 'haraka',
      Family: 'familia',
      Rings: 'vikuku'
    };

    const regex = new RegExp(keywords.join('|'), 'gi');
    return value.replace(regex, matchedKeyword => translations[matchedKeyword as keyof typeof translations]);
  }
}

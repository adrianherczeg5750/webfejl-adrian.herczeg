import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Track } from 'src/app/shared/modellek/Track';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-grandprix',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    MatGridListModule
  ],
  templateUrl: './grandprix.component.html',
  styleUrl: './grandprix.component.scss'
})
export class GrandprixComponent {
  tracks: Track[] = [
    {
      name: 'Monaco Grand Prix',
      location: 'Monte Carlo, Monaco',
      facts: [
        'A leglassabb pálya a Forma-1-ben, de az egyik legtechnikásabb.',
        'A pálya híres szűk utcáiról és éles kanyarjairól.',
        'Monaco Grand Prix az egyik legrégebbi és legrangosabb verseny a Forma-1-ben.'
      ]
    },
    {
      name: 'Silverstone Circuit',
      location: 'Silverstone, United Kingdom',
      facts: [
        'Az első Forma-1-es világbajnoki futamot itt rendezték 1950-ben.',
        'Az egyik leggyorsabb pálya a szezonban, híres a gyors kanyarokról.',
        'A pálya egy korábbi katonai repülőtér helyén épült.'
      ]
    },
    {
      name: 'Monza',
      location: 'Monza, Italy',
      facts: [
        'Az egyik leggyorsabb pálya a Forma-1-ben, híres a sebességéről.',
        'A pálya részben egy erdőben található, amely egyedülálló hangulatot ad.',
        'Monza a Forma-1 történetének egyik legrégebbi és legismertebb pályája.'
      ]
    },
    {
      name: 'Spa-Francorchamps',
      location: 'Stavelot, Belgium',
      facts: [
        'A pálya híres az Eau Rouge és Raidillon kombinációjáról.',
        'Gyakran változó időjárási körülmények teszik kihívássá a versenyzést.',
        'Az egyik leghosszabb pálya a naptárban, és a versenyzők kedvence.'
      ]
    },
    {
      name: 'Circuit de Barcelona-Catalunya',
      location: 'Montmelo, Spain',
      facts: [
        'A pálya különféle tesztelési programok miatt népszerű a csapatok körében.',
        'Az egyik legkiegyensúlyozottabb pálya, amely mindenféle kanyart tartalmaz.',
        'Gyakran a szezon egyik legforróbb versenye.'
      ]
    },
    {
      name: 'Suzuka International Racing Course',
      location: 'Suzuka, Japan',
      facts: [
        'Az egyetlen pálya a Forma-1-ben, amely egy nyolcas alakú konfigurációval rendelkezik.',
        'Híres a 130R kanyarról, amely az egyik leggyorsabb a szezonban.',
        'A pálya egy vidámpark része, és gyakran otthont ad a szezon döntő futamainak.'
      ]
    },
    {
      name: 'Interlagos',
      location: 'Sao Paulo, Brazil',
      facts: [
        'A pálya hivatalos neve Autodromo Jose Carlos Pace.',
        'A magas tengerszint feletti magasság és a kemény kanyarok különleges kihívást jelentenek.',
        'Az egyik legkedveltebb pálya a rajongók és a versenyzők körében is.'
      ]
    },
    {
      name: 'Circuit of the Americas',
      location: 'Austin, USA',
      facts: [
        'A pálya különféle ikonikus kanyarokat tartalmaz más híres pályákról.',
        'Az Egyesült Államok egyik legmodernebb versenypályája.',
        'Híres a meredek emelkedőjéről az első kanyarhoz.'
      ]
    },
    {
      name: 'Hungaroring',
      location: 'Mogyoród, Hungary',
      facts: [
        'Az egyik leglassabb pálya, de technikailag kihívást jelent.',
        'Gyakran hőség és poros pálya jellemzi.',
        'Az első Forma-1-es futamot a vasfüggöny mögött itt rendezték 1986-ban.'
      ]
    },
    {
      name: 'Marina Bay Street Circuit',
      location: 'Singapore',
      facts: [
        'A Forma-1 első éjszakai versenyének otthona.',
        'A pálya a város utcáin halad, és rendkívül kihívásos a versenyzők számára.',
        'Híres a látványos világításáról és a trópusi hőségről.'
      ]
    },
    {
      name: 'Yas Marina Circuit',
      location: 'Abu Dhabi, UAE',
      facts: [
        'Az egyik legmodernebb pálya a naptárban, amely egy luxus kikötő mellett található.',
        'Az egyetlen verseny, amely nappal kezdődik és éjszaka fejeződik be.',
        'A pálya híres a futurisztikus boxutcájáról és a luxus környezetéről.'
      ]
    },
    {
      name: 'Circuit de Monaco',
      location: 'Monte Carlo, Monaco',
      facts: [
        'Az egyik legnehezebb és legtechnikásabb pálya a szűk utcák és éles kanyarok miatt.',
        'A versenyt az egész világon figyelemmel kísérik, és a Forma-1 egyik legnagyobb presztízsű eseménye.',
        'A versenyzőknek precíziós vezetésre van szükségük a szalagkorlátok közötti hibátlan teljesítményhez.'
      ]
    },
    {
      name: 'Hockenheimring',
      location: 'Hockenheim, Germany',
      facts: [
        'A pálya híres a hosszú egyenesekről és a kemény féktávokról.',
        'A pálya régebbi változata sokkal hosszabb volt, és az erdőben vezetett.',
        'Az egyik legnagyobb nézőszámot vonzó verseny a naptárban.'
      ]
    },
    {
      name: 'Circuit Gilles Villeneuve',
      location: 'Montreal, Canada',
      facts: [
        'A pálya egy mesterséges szigeten található, a Notre Dame-szigeten.',
        'Híres a Wall of Champions-ról, ahol sok bajnok ütközött már neki.',
        'Az egyik legnépszerűbb verseny a rajongók körében, köszönhetően a kanadai szenvedélynek.'
      ]
    },
    {
      name: 'Baku City Circuit',
      location: 'Baku, Azerbaijan',
      facts: [
        'Az egyik leghosszabb és leggyorsabb utcai pálya a naptárban.',
        'A pálya a város történelmi központján halad át, szűk utcák és hosszú egyenesek váltakoznak.',
        'Gyakran váratlan események jellemzik, és izgalmas versenyeket eredményez.'
      ]
    },
    {
      name: 'Zandvoort',
      location: 'Zandvoort, Netherlands',
      facts: [
        'A pálya a homokdűnék között található, közel a tengerparthoz.',
        'A pálya híres a meredek döntött kanyarokról és a szűk vonalvezetésről.',
        'A holland rajongók, különösen Max Verstappen támogatói, fantasztikus hangulatot teremtenek.'
      ]
    },
    {
      name: 'Albert Park Circuit',
      location: 'Melbourne, Australia',
      facts: [
        'Az évadnyitó verseny helyszíne, amely gyakran kiszámíthatatlan eredményeket hoz.',
        'A pálya egy parkon belül helyezkedik el, amelyet ideiglenesen zárnak le a versenyre.',
        'Híres a vibráló hangulatáról és a közeli városképről.'
      ]
    },
    {
      name: 'Sochi Autodrom',
      location: 'Sochi, Russia',
      facts: [
        'A pálya a 2014-es Téli Olimpiai Játékok helyszínén található.',
        'Hosszú egyenesek és éles kanyarok jellemzik a pályát.',
        'A verseny gyakran stratégiai kihívást jelent a csapatok számára.'
      ]
    },
    {
      name: 'Red Bull Ring',
      location: 'Spielberg, Austria',
      facts: [
        'A pálya gyönyörű hegyi környezetben található.',
        'Az egyik legrövidebb pálya a naptárban, gyors és technikás szakaszokkal.',
        'A pálya a Red Bull cég tulajdonában van, és a versenyzők kedvelik a kihívásait.'
      ]
    },
    {
      name: 'Circuit Paul Ricard',
      location: 'Le Castellet, France',
      facts: [
        'A pálya híres a kék és piros csíkos bukóterekről, amelyek vizuális különlegességet adnak.',
        'Az egyik legmodernebb pálya, amely különféle konfigurációkban használható.',
        'A pálya sima aszfaltja és széles vonalvezetése különleges versenyzési élményt nyújt.'
      ]
    },
    {
      name: 'Autodromo Hermanos Rodriguez',
      location: 'Mexico City, Mexico',
      facts: [
        'A pálya magas tengerszint feletti magassága miatt a motorok teljesítménye csökken.',
        'Híres a Foro Sol szakaszról, amely egy stadionon halad át, fantasztikus nézői élményt nyújtva.',
        'A verseny rendkívül népszerű a mexikói rajongók körében.'
      ]
    },
    {
      name: 'Bahrain International Circuit',
      location: 'Sakhir, Bahrain',
      facts: [
        'Az első pálya a Közel-Keleten, amely Forma-1-es futamot rendezett.',
        'Az egyik legmegbízhatóbb pálya az éjszakai versenyekhez.',
        'A versenyt gyakran erős szél és homokviharok zavarják.'
      ]
    },
    {
      name: 'Shanghai International Circuit',
      location: 'Shanghai, China',
      facts: [
        'Az egyik legmodernebb pálya, amelyet Hermann Tilke tervezett.',
        'Híres a hosszú egyenesről, amely kiváló előzési lehetőséget biztosít.',
        'A pálya rendkívül széles, lehetővé téve a különböző versenyvonalakat.'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}


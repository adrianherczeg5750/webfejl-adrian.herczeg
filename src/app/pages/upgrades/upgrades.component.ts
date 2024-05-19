import { Component, OnInit } from '@angular/core';
import { Development } from 'src/app/shared/modellek/Developement';
import {MatGridListModule} from '@angular/material/grid-list';
import {CommonModule, NgFor} from "@angular/common";
@Component({
  selector: 'app-upgrades',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    MatGridListModule
  ],
  templateUrl: './upgrades.component.html',
  styleUrl: './upgrades.component.scss'
})
export class UpgradesComponent implements OnInit {
  developments: Development[] = [
    {
      title: 'Mit céloztak a Ferrari fejlesztései Imolára?',
      img: 'assets/ferrari-imola.jpg',
      description: 'Soroljuk fel, melyik hét ponton változott a Ferrari: Módosult az első szárny felső elemének profilja a jobb teljesítmény érdekében, a légellenállás csökkentését célzó módon hozzányúltak a hátsó szárnyhoz is. A leglátványosabb az új oldaldoboz és az új P-alakú hűtőnyílás: a Ferrari magyarázata szerint a légáramlatok jobb irányítása a cél – emiatt a halo oldalán is eszközöltek némi módosítást. Szintén a jobb levegőáramlást szolgálja, hogy csökkent a motorborítás mérete. Mindezekkel összefüggésben a padlólemez szélét is átdolgozták, különösen annak hátsó szekcióját, emellett módosult a diffúzor csatornáinak profilja. Végezetül pedig változtattak a hátsó futóműnél a felső lengőkar borításán is.'
    },
    {
      title: 'Bokszutcai rajt a „nem elég jó” fejlesztések után az Aston Martinnál',
      img: 'assets/f1-alonso-aston-imola.jpg',
      description: 'A várakozásokat alulmúló hétvégét teljesít egyelőre az F1-es Emilia-romagnai Nagydíjon az Aston Martin, amely egyébként a leghosszabb listát adta le még pénteken az FIA-nál az Imolába hozott fejlesztéseikről: többek között az első szárnyuk is megújult az első európai állomásra. Ehhez képest Fernando Alonso már a Q1-ben kiszállt, Lance Stroll pedig a Q2-ben búcsúzott az időmérőn – a kanadai ki is mondta, hogy nem elég jó a friss csomag: „Nem ilyen hétvégében reménykedtünk a fejlesztéseinkkel, nem elég versenyképesek. Szerintem minden működik, csak nem elég jók, úgyhogy tovább nyomjuk. Más csapatok versenyképesnek tűnnek, míg mi nem vagyunk eléggé azok jelenleg. Ugyanolyannak érződik, mint tavaly: hoztunk néhány fejlesztést, talán kicsit segítettek, de több kell ahhoz, hogy felzárkózzunk” – összegzett a kanadai.'
    },
    {
      title: 'Mercedes: Fejlődtünk, csak nem látszik',
      img: 'assets/f1-mercedes-miami-1-hamilton.jpg',
      description: 'Nyögvenyelős szezonkezdetet produkál a 2024-es Formula-1-es szezonban a Mercedes: hiába szabták át teljes egészében az autójukat az elődökhöz képest, a várt áttörés egyelőre nem történt meg. Sőt, a W15-ös csak nagyjából a negyedik legjobb konstrukciónak tűnik, egyértelműen a Red Bull, a Ferrari és a McLaren mögött, nagy versenyben az Aston Martinnal. „Sikerült a fejlesztési csomagunk felét előbbre hoznunk Miamira, a másik fele Imolában fog megérkezni. Rendkívül keményen dolgozunk azon, hogy a jövőbeli versenyekre is hozhassunk fejlesztéseket” – magyarázta Shovlin a Mercedes szokásos futam utáni értékelő videójában.'
    },
    {
      title: 'Előrehozza fejlesztését az Alpine – az egyik autón',
      img: 'assets/alpine.jpg',
      description: 'A másfél héttel ezelőtti Japán Nagydíjon bevetették az első fejlesztési csomagjukat, amely az időmérőn arra már jó volt, hogy Esteban Ocon bejusson vele a Q2-be, a futam viszont így is a küszködésről szólt a franciák számára – és bár ebben közrejátszhatott az újraindítás utáni koccanásukból adódó sérülés, Ocon szerint valójában nemigen befolyásolta ez a teljesítményüket. Mindenesetre az Alpine nem lazsál: mint az az enstone-i alakulat sanghaji előzetes sajtóközleményéből kiderül, az istálló újabb adag fejlesztést pakol fel az A524-esre a Kínai Nagydíjon. Viszont nem mindkettőre: csak Ocon kapja meg az újítást, amely a Motorsport.com információi szerint elsősorban egy átalakított padlólemezt takar.'
    },
    {
      title: 'Több mint kétmillió dolláros kár a Williamsnél',
      img: 'assets/ATP_F1_59802_20240407_SUZUKA-JAPAN_Peterson_resize.jpg',
      description: 'Az előző két Formula-1-es nagydíjhétvégén három komoly balesetet könyvelhetett el a Williams alakulata. Kezdődött minden azzal, hogy Alexander Albon olyannyira összetörte az autóját az Ausztrál Nagydíj első szabadedzésén, hogy a karosszériát nem is lehetett a helyszínen megjavítania, és mivel tartalékja pedig nincs a grove-i istállónak, a thai-brit pilóta Logan Sargeant autójával folytatta a melbourne-i hétvégét.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

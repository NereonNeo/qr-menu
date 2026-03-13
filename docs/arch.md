Структура файлов

Каждый модуль имеет публичную точку входа: {scope}.entry.ts
Также резервные имена для:
{scope}.service.ts
{scope}.store.ts

для UI сегментов: {scope}.component.tsx
Слой pages ИГНОРИРУЙ, оставляй как есть

```
entity/
 credit/
  card.entry.ts // точка входа бывший index.ts
  model/
   credit.service.ts // сама бизнес логика и все запросы
   credit.store.ts // вся логика стора хранится
  ui/
   credit-card.component.ts // Контент самой фичи

featutes/
 credit/
  common/
   credit-application.const.ts
  credit-application/
   credit-application.entry.ts
   ui/
     credit-application.component.ts
 cross/ //только фичи, которые реально используются минимум в 2 модулях
  sign-eimzo-modal/
   sign-eimzo-modal.enrty.ts
   ui/
    sign-eimzo-modal.component.ts

widgets/
  credit/
    credit-dashboard-card/
      ui/
       credit-dashboard-card.component.tsx
      model/   // если реально есть локальная оркестрация/состояние
      credit-dashboard.entry.ts
  cross/
    header/
     ui/
      heder.component.tsx
     header.enrty.ts
    sidebar/
    notifications-panel/

```

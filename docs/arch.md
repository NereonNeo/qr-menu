Структура файлов:

Каждый модуль имеет публичную точку входа: {scope}.entry.ts
Также резервные имена для:
{scope}.service.ts // сама бизнес логика и все запросы
{scope}.store.ts //вся логика стора
{scope}.component // UI сегмент
{scope}.const.ts // Константы
{scope}.contract.ts || .types.ts // Все типы

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

features/
 credit/
  common/
   credit-application.const.ts
  credit-application/
   credit-application.entry.ts
   ui/
     credit-application.component.ts
 cross/ //только фичи, которые реально используются минимум в 2 модулях
  sign-plan-modal/
   sign-plan-modal.entry.ts
   ui/
    sign-plan-modal.component.ts

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
     header.entry.ts
    sidebar/
    notifications-panel/

```

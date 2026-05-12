## Используй для иконок только компонент <Icon name={$name}>

Используй для иконок только компонент <Icon name={$name}> если видишь что такой иконки с таким именем нет то дополни в список иконок icon-const.ts и используй.
Пример Плохо:

```tsx
<ChevronDown
  className={clsx(
    isExpanded ? "rotate-180" : "rotate-0",
    isChildActive ? "text-primary-500" : "text-gray-400 group-hover:text-primary-400",
    "size-4 transition-all",
  )}
/>
```

Пример Хорошо:

```tsx
<Icon
  name="chevron-down"
  className={clsx(
    isExpanded ? "rotate-180" : "rotate-0",
    isChildActive ? "text-primary-500" : "text-gray-400 group-hover:text-primary-400",
    "size-4 transition-all",
  )}
/>
```

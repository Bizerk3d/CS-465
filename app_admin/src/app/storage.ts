import { InjectionToken } from '@angular/core';
<<<<<<< HEAD

=======
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage
});

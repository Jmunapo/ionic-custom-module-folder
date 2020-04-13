# Custom folder module

#### Like tabs module with routing

A quick project to create a custom module folder to hold all your module pages with

    -page1/
        -.ts
        -.html
        -...
    -page2/
        -.ts
        -.html
        -...
    -routing.module.ts
    -module.ts

#### How To
    * In `src/app/app-routing.module.ts` add
    ```JS
       const routes: Routes = [
            ...,
            {
                path: 'custom',
                loadChildren: () =>
                import('./custom/custom.module').then(m => m.CustomModule)
            },
            ...
       ]
    ```
    * In IONIC 4+ sub-folder `git clone https://github.com/Jmunapo/ionic-custom-module-folder.git`
    * rename `folder_name(ionic-custom-module-folder) => 'your-module'`
    * rename `custom-routing.module.ts ==> 'your-module'-routing.module.ts
    * rename `custom.module.ts ==> 'your-module'-.module.ts
    * run `ionic g page 'you-module'/page1

License MIT

You have an App Idea? I would ❤️ to bring it to life.

Send me an email [Joemags joemags.apps@gmail.com](mailto:joemags.apps@gmail.com?subject=[GitHub]%20I%20Have%20an%20Ide)
import { override } from "fluid-code/dart/core";
import {
  StatelessWidget,
  runApp,
  BuildContext,
  Widget,
  Key,
  MainAxisAlignment,
  Column,
  Center,
  AppBar,
  Text,
  Scaffold, 
  Colors
} from "fluid-code/flutter_web";
import { MaterialApp, ThemeData } from "fluid-code/flutter_web/material";

class MyHomePage extends StatelessWidget {
  title: string;

  constructor({ title, key = undefined }) {
    super({ key: key as Key });
    this.title = title as string;
  }

  @override() 
  build(context: BuildContext): Widget {
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return new Scaffold({
      appBar: new AppBar({
        title: new Text(this.title)
      }),
      body: new Center({
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: new Column({
          // Column is also layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (choose the "Toggle Debug Paint" action
          // from the Flutter Inspector in Android Studio, or the "Toggle Debug
          // Paint" command in Visual Studio Code) to see the wireframe for each
          // widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: [new Text("Hello, World!")] as Widget[]
        })
      })
    });
  }
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override()
  build(context: BuildContext): Widget {
    return new MaterialApp({
      title: "Flutter Demo",
      theme: new ThemeData({
        primarySwatch: Colors.blue
      }),
      home: new MyHomePage({ title: "Flutter Demo Home Page " })
    });
  }
}

const main = (): void => runApp(new MyApp());

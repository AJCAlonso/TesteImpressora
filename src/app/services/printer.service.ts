import { Injectable } from '@angular/core';
import { cordova, IonicNativePlugin } from '@ionic-native/core'

@Injectable({
  providedIn: 'root'
})

export class PrinterService extends IonicNativePlugin {
  static pluginName = "cordova.plugin.saurusprinter";
  static plugin = "cordova.plugin.saurusprinter";
  static pluginRef = "PluginPrinter";
  static repo = 'https://github.com/AJCAlonso/PluginPrinter.git';
  static platforms = ["Android"];

  imprimir(arq1: any): Promise<string> {
    return cordova(this, 'imprimir',{},[arq1]);
  }

}
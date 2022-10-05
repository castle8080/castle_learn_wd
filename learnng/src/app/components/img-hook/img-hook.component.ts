import { Component, OnInit, ElementRef } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-img-hook',
  templateUrl: './img-hook.component.html',
  styleUrls: ['./img-hook.component.scss']
})
export class ImgHookComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  async ngAfterViewInit() {
    let elem: HTMLElement = this.elRef.nativeElement;
    _.each(elem.getElementsByTagName("img"), async img => {
      console.log("image: ", img);
      let imgArr = img.src.split(":");
      let imgId = imgArr[1];

      let imgSrcUri = `/assets/images/imgserve/${imgId}.jpg`;
      let imgCache = await caches.open("image-cache");

      let imgCacheResponse = await imgCache.match(imgSrcUri);
      if (imgCacheResponse !== undefined) {
        console.log("Getting image from cache!");
        let imgBlob = await imgCacheResponse.blob();
        let imgURL = URL.createObjectURL(imgBlob);
        img.src = imgURL;
      }
      else {
        let imgResp = await fetch(imgSrcUri);
        let imgBlob = await imgResp.blob();

        imgCache.put(imgSrcUri, new Response(imgBlob));
        let imgURL = URL.createObjectURL(imgBlob);
        img.src = imgURL;
      }
    });
  }
}

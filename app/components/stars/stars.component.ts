import { Component, Input, OnInit } from '@angular/core';

@Component({
    templateUrl: 'app/components/stars/stars.component.html',
    styles: ['.starrating{ color: #d17581 }'],
    selector : 'auction-stars'
})
export default class StarsComponent implements OnInit{
    @Input() count : number = 5;
    @Input() rating : number = 0;
    stars : boolean[] = [];

    // 컴포넌트의 데이터가 프로퍼티에 전달된 이후 and 자식 객체에 데이터가 전달되기 이전
    // 이 컴포넌트에서 @Input() count와 @Input() rating 가 전달된 이후 실행됨
    ngOnInit(){
        for(let i = 1; i <= this.count; i ++){
            this.stars.push(i> this.rating); // TODO: true 면 별을 색칠하지 않고 false일 경우 색칠한다.
        }
    }
}
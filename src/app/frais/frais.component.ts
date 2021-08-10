import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-frais',
  templateUrl: './frais.component.html',
  styleUrls: ['./frais.component.css']
})
export class FraisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onDonnation(value :any) {
    axios({
      method: 'post',
      url: 'https://192.168.1.140:8443/nexo',
      headers: {'Content-Type': 'application/json', 'x-API-key': 'AQE1gXvdQNmbKVEb5WOzk3A9h8eURZtMA4oEeWhbz2GqvWlFjcJ/HFB753raKOaCCg6ifAcPv+oQwV1bDb7kfNy1WIxIIkxgBw==-vgIIC+AhU709lGHocP3RHikDauBB9musQF8Z2bBWuyw=-[@Tse8W7Z&xhwXQ$'},
      data: {
          "SaleToPOIRequest":{
              "MessageHeader":{
                  "ProtocolVersion":"3.0",
                  "MessageClass":"Service",
                  "MessageCategory":"Payment",
                  "MessageType":"Request",
                  "SaleID":"ABC123",
                  "ServiceID":"1",
                  "POIID":"V400m-346112453"
              },
              "PaymentRequest":{
                  "SaleData":{
                      "SaleTransactionID":{
                          "TransactionID":"12345",
                          "TimeStamp":"2021-08-10T18:16:20.379Z"
                      }
                  },
                  "PaymentTransaction":{
                      "AmountsReq":{
                          "Currency":"EUR",
                          "RequestedAmount":12.00
                      }
                  }
              }
          }
           
      }
  })
  .then(function(response){
      console.log(response);
  })
  .catch(function(error){
      console.log(error);
  })
  } 
}


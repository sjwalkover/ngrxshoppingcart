import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from './../cart-state-store/cart.actions';
import { Product } from './../entity/product';
/* Product List */
export const PRODUCTS = [ {
  id: 1,
  name: "Adidas Stan Smith",
  description: "Very good shoes",
  price: 1000.0,
  image:"https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=" },
    {id: 2, name: 'Nike Air Max',  description: 'very good shoes', price: 300.0,image:'https://media.istockphoto.com/photos/sport-shoes-on-isolated-white-background-picture-id956501428?k=20&m=956501428&s=612x612&w=0&h=UC4qdZa2iA0PJvv0RIBlJDyF80wxFyLPq4YWvZa30Sc='},
    {id: 3, name: 'Nike ',   description: 'good shoes',price: 200.0,image:'../../assets/products/t-shirt.jpg'},
    // {id: 4, name: 'Nike Air Max', description: 'puma shoes',price: 130.0,image:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    // {id: 5, name: 'Reebok Sweat Shirt', category: 'Clothes',price: 45.0,  description: '',image:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    // {id: 6, name: 'Puma T-Shirt',   description: 'branded clothes',price: 30.0,image:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    // {id: 7, name: 'Puma T-Shirt',   description:  'branded clothes',price: 30.0,image:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    // {id: 8, name: 'Puma T-Shirt',    description: 'branded clothes',price: 30.0,image:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    // {id: 9, name: 'Puma T-Shirt',    description: 'branded clothes',price: 30.0,image:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    // {id: 10, name: 'Puma ',  description: 'Branded clothes',price: 30.0, image:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
]

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public products(): Product[] {
    return PRODUCTS
  }

  public buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }
}

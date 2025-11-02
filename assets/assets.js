import basket_icon from './basket_icon.png'
import header_img from './header_img.png'
import menu_2 from './menu_2.png'
import menu_4 from './menu_4.png'
import menu_6 from './menu_6.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import checked from './checked.png'

export const assets = {
    basket_icon,
    header_img,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    checked
}
export const menu_list = [
    {menu_name: "Rolls", menu_image: menu_2},
    {menu_name: "Sandwich", menu_image: menu_4},
    {menu_name: "Full Meal", menu_image: menu_6}
]

export const food_list = [
    // Rolls (using menu_2 as category image)
    {_id: "1", name: "Lasagna Rolls",   image: menu_2, price: 14, description: "Food provides essential nutrients for overall health and well-being", category: "Rolls"},
    {_id: "2", name: "Peri Peri Rolls", image: menu_2, price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Rolls"},
    {_id: "3", name: "Chicken Rolls",   image: menu_2, price: 20, description: "Food provides essential nutrients for overall health and well-being", category: "Rolls"},
    {_id: "4", name: "Veg Rolls",       image: menu_2, price: 15, description: "Food provides essential nutrients for overall health and well-being", category: "Rolls"},
    // Sandwich (using menu_4 as category image)
    {_id: "5", name: "Chicken Sandwich",image: menu_4, price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich"},
    {_id: "6", name: "Vegan Sandwich",  image: menu_4, price: 18, description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich"},
    {_id: "7", name: "Grilled Sandwich",image: menu_4, price: 16, description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich"},
    {_id: "8", name: "Bread Sandwich",  image: menu_4, price: 24, description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich"},
    // Full Meal (using menu_6 as category image)
    {_id: "9", name: "Garlic Mushroom", image: menu_6, price: 14, description: "Food provides essential nutrients for overall health and well-being", category: "Full Meal"},
    {_id: "10",name: "Fried Cauliflower",image: menu_6,price: 22, description: "Food provides essential nutrients for overall health and well-being", category: "Full Meal"},
    {_id: "11",name: "Mix Veg Pulao",   image: menu_6, price: 10, description: "Food provides essential nutrients for overall health and well-being", category: "Full Meal"},
    {_id: "12",name: "Rice Zucchini",   image: menu_6, price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Full Meal"}
]

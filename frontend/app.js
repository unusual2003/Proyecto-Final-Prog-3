document.addEventListener("DOMContentLoaded", () => {
    const menuList = document.getElementById("menu-list");
    const orderForm = document.getElementById("order-form");
    const orderList = document.getElementById("order-list");
    const historyList = document.getElementById("history-list");
  
    const API_BASE_URL = "http://localhost:5000/api/orders";
  
    
    const loadMenu = async () => {
      const menuItems = [
        { name: "Caesar Salad", price: "$7.99" },
        { name: "Greek Salad", price: "$8.99" },
        { name: "Fruit Salad", price: "$6.99" },
      ];
      menuItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price}`;
        menuList.appendChild(li);
      });
    };
  
    
    const loadOrders = async () => {
      try {
        const response = await fetch(API_BASE_URL);
        const orders = await response.json();
        orderList.innerHTML = ""; 
        orders.forEach(order => {
          const li = document.createElement("li");
          li.textContent = `${order.dishName} x${order.quantity} - ${order.status}`;
          orderList.appendChild(li);
        });
      } catch (error) {
        console.error("Error loading orders:", error);
      }
    };
  
    
    const addOrder = async (dishName, quantity) => {
      try {
        const response = await fetch(API_BASE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ dishName, quantity }),
        });
        const newOrder = await response.json();
        console.log("Order added:", newOrder);
        loadOrders(); 
      } catch (error) {
        console.error("Error adding order:", error);
      }
    };
  
   
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const dishName = document.getElementById("dish-name").value;
      const quantity = 1; 
      addOrder(dishName, quantity);
      orderForm.reset();
    });
  
    
    loadMenu();
    loadOrders();
  });
  
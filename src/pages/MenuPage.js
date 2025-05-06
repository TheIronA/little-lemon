import React from 'react';
import './MenuPage.css';

const MenuPage = () => {
  const menuCategories = [
    {
      id: 1,
      name: 'Appetizers',
      items: [
        {
          id: 101,
          name: 'Hummus & Pita',
          description: 'Creamy chickpea dip served with warm pita bread and olive oil',
          price: 8.00,
          imageUrl: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 102,
          name: 'Bruschetta',
          description: 'Grilled bread topped with garlic, fresh tomatoes, basil and olive oil',
          price: 9.50,
          imageUrl: 'https://img.freepik.com/free-photo/classic-italian-bruschetta-served-dark-board_1220-4038.jpg?t=st=1746529414~exp=1746533014~hmac=5ad522d44442768a6ccf53f4c2d754eb2e7a895cebb562bbf577b6e63bddcf35&w=1380'
        },
        {
          id: 103,
          name: 'Calamari',
          description: 'Crispy fried squid rings served with lemon and garlic aioli',
          price: 13.00,
          imageUrl: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 104,
          name: 'Dolmades',
          description: 'Grape leaves stuffed with rice, pine nuts, and fresh herbs',
          price: 10.00,
          imageUrl: 'https://img.freepik.com/premium-photo/dolma-from-grape-vines-with-rice-meat-spices_996271-7216.jpg?ga=GA1.1.538463868.1735125408&semt=ais_hybrid&w=740'
        },
        {
          id: 105,
          name: 'Tzatziki & Pita',
          description: 'Cool yogurt dip with cucumber, garlic, and dill served with warm pita',
          price: 7.50,
          imageUrl: 'https://img.freepik.com/free-photo/yogurt-herbal-dressing-with-spices-tandir-bread_114579-3240.jpg?ga=GA1.1.538463868.1735125408&semt=ais_hybrid&w=740'
        },
        {
          id: 106,
          name: 'Falafel Plate',
          description: 'Crispy chickpea fritters served with tahini sauce and pickled vegetables',
          price: 9.00,
          imageUrl: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: 2,
      name: 'Main Courses',
      items: [
        {
          id: 201,
          name: 'Greek Salad',
          description: 'Fresh cucumbers, tomatoes, olives, peppers, red onions and feta cheese with olive oil dressing',
          price: 13.50,
          imageUrl: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 202,
          name: 'Moussaka',
          description: 'Traditional Greek casserole with layers of eggplant, potato, seasoned ground lamb and béchamel sauce',
          price: 17.50,
          imageUrl: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 203,
          name: 'Grilled Salmon',
          description: 'Fresh Atlantic salmon fillet with lemon herb sauce, served with seasonal vegetables',
          price: 19.50,
          imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 204,
          name: 'Lamb Souvlaki',
          description: 'Marinated lamb skewers grilled to perfection, served with tzatziki sauce and Greek rice',
          price: 21.00,
          imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 205,
          name: 'Vegetable Paella',
          description: 'Traditional Spanish rice dish with bell peppers, peas, artichokes, and saffron',
          price: 16.00,
          imageUrl: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 206,
          name: 'Seafood Pasta',
          description: 'Fresh linguine tossed with shrimp, mussels, clams, and calamari in a light tomato sauce',
          price: 22.50,
          imageUrl: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 207,
          name: 'Chicken Shawarma Plate',
          description: 'Marinated rotisserie chicken with Mediterranean spices, served with rice, salad, and garlic sauce',
          price: 18.00,
          imageUrl: 'https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 208,
          name: 'Mediterranean Vegetable Stew',
          description: 'Hearty stew of eggplant, zucchini, tomatoes, and chickpeas in a rich herb-infused broth',
          price: 15.00,
          imageUrl: 'https://images.unsplash.com/photo-1591386767153-987783380885?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: 3,
      name: 'Desserts',
      items: [
        {
          id: 301,
          name: 'Lemon Dessert',
          description: 'Family recipe lemon cake with a sweet and tangy glaze',
          price: 7.50,
          imageUrl: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 302,
          name: 'Baklava',
          description: 'Layers of phyllo dough filled with chopped nuts and sweetened with honey syrup',
          price: 8.50,
          imageUrl: 'https://img.freepik.com/free-photo/close-up-view-traditional-turkish-baklava-with-pistachio-black-board_141793-6050.jpg?ga=GA1.1.538463868.1735125408&semt=ais_hybrid&w=740'
        },
        {
          id: 303,
          name: 'Greek Yogurt',
          description: 'Creamy Greek yogurt topped with honey and walnuts',
          price: 6.00,
          imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 304,
          name: 'Tiramisu',
          description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
          price: 9.00,
          imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 305,
          name: 'Kunafa',
          description: 'Middle Eastern dessert made with thin noodle-like pastry soaked in sweet syrup with cheese filling',
          price: 9.50,
          imageUrl: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 306,
          name: 'Chocolate Olive Oil Cake',
          description: 'Rich chocolate cake made with extra virgin olive oil and sea salt',
          price: 8.00,
          imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: 4,
      name: 'Drinks',
      items: [
        {
          id: 401,
          name: 'Greek Coffee',
          description: 'Traditional Greek coffee served in a small cup',
          price: 4.00,
          imageUrl: 'https://img.freepik.com/free-photo/turkish-coffee-served-ornated-cup_140725-2869.jpg?ga=GA1.1.538463868.1735125408&semt=ais_hybrid&w=740'
        },
        {
          id: 402,
          name: 'Fresh Lemonade',
          description: 'Homemade lemonade with fresh lemons and mint',
          price: 4.50,
          imageUrl: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 403,
          name: 'House Red Wine',
          description: 'Glass of our house red wine from Mediterranean vineyards',
          price: 7.50,
          imageUrl: 'https://img.freepik.com/premium-photo/close-up-beer-glass_1048944-23779763.jpg?ga=GA1.1.538463868.1735125408&semt=ais_hybrid&w=740'
        },
        {
          id: 404,
          name: 'Sangria',
          description: 'Red wine mixed with chopped fruit, brandy, and orange juice',
          price: 8.50,
          imageUrl: 'https://images.unsplash.com/photo-1600346019001-8d56d1b51d59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 405,
          name: 'Iced Mint Tea',
          description: 'Refreshing mint tea served over ice with fresh mint leaves',
          price: 4.50,
          imageUrl: 'https://img.freepik.com/free-photo/lemon-ice-tea-table_140725-8614.jpg?ga=GA1.1.538463868.1735125408&semt=ais_hybrid&w=740'
        },
        {
          id: 406,
          name: 'House White Wine',
          description: 'Glass of our house white wine, crisp and dry with citrus notes',
          price: 7.50,
          imageUrl: 'https://img.freepik.com/free-photo/glass-wine-with-green-grapes-close-up_23-2148261648.jpg?ga=GA1.1.538463868.1735125408&semt=ais_hybrid&w=740'
        },
        {
          id: 407,
          name: 'Espresso',
          description: 'Strong Italian coffee served in a small cup',
          price: 3.50,
          imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: 5,
      name: 'Sides',
      items: [
        {
          id: 501,
          name: 'Grilled Pita Bread',
          description: 'Warm pita bread brushed with olive oil and herbs',
          price: 4.00,
          imageUrl: 'https://img.freepik.com/free-photo/high-angle-basket-with-arepas_23-2148716364.jpg?ga=GA1.1.538463868.1735125408&semt=ais_hybrid&w=740'
        },
        {
          id: 502,
          name: 'Mediterranean Rice',
          description: 'Fluffy rice cooked with herbs and pine nuts',
          price: 5.00,
          imageUrl: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 503,
          name: 'Roasted Vegetables',
          description: 'Seasonal vegetables roasted with olive oil and Mediterranean herbs',
          price: 6.00,
          imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 504,
          name: 'Greek Fries',
          description: 'Hand-cut potatoes fried and seasoned with herbs, lemon, and feta cheese',
          price: 6.50,
          imageUrl: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    }
  ];

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <h1>Our Menu</h1>
        <p>Experience the authentic flavors of the Mediterranean</p>
      </section>

      <div className="menu-container">
        {menuCategories.map(category => (
          <section key={category.id} className="menu-section">
            <h2 className="category-title">{category.name}</h2>
            <div className="menu-items">
              {category.items.map(item => (
                <div key={item.id} className="menu-item">
                  <div className="menu-item-image">
                    <img src={item.imageUrl} alt={item.name} />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <h3>{item.name}</h3>
                      <p className="item-price">£{item.price.toFixed(2)}</p>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MenuPage; 
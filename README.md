# pipedriveBlingIntegration

Used NODEJS, MONGODB to integrate pipedrive and Bling

When starting, enter the folder pipedriveBlingIntegration


```cd 'pipedriveBlingIntegration```

after that install the dependencies

```npm install```

#ENDPOINTS

# Deals:
    GET: localhost:3000/deals
        Responsible for collecting the deals saved in the table.
    PUT: localhost:3000/deals
        Responsible for collecting the pipedrive deals and adding to the table.

# Orders:
    GET: localhost:3000/order
        Responsible for collecting the orders saved in the table.
    PUT: localhost:3000/order
        Responsible for collecting the deals from table, send to Bling and save on orders table.

enviroment variables:

    PIPEDRIVE_APIKEY=e8bde93e8773376be841a9b7fc8244ad33247161
    BLING_APIKEY=7a6008e4ed491ff3dad8afb5982a8130a80a43cee6187298a51a62d7f304455f590a339d
    MONGO_CNSTRING=mongodb+srv://matheuszeggio1:23Rb1npvUziEODeY@cluster0.yt7in.mongodb.net

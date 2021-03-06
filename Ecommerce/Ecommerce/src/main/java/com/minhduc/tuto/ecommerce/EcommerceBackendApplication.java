package com.minhduc.tuto.ecommerce;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.minhduc.tuto.ecommerce.model.Product;
import com.minhduc.tuto.ecommerce.service.ProductService;

@SpringBootApplication
public class EcommerceBackendApplication {

    public static void main(String[] args) {
	SpringApplication.run(EcommerceBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(ProductService productService) {
	return args -> {
	    productService.save(new Product(1L, "TV Set", 300.00, "http://placehold.it/200x100"));
	    productService.save(new Product(2L, "Game Console", 200.00, "http://placehold.it/200x100"));
	    productService.save(new Product(3L, "Sofa", 100.00, "http://placehold.it/200x100"));
	    productService.save(new Product(4L, "Icecream", 5.00, "http://placehold.it/200x100"));
	    productService.save(new Product(5L, "Beer", 3.00, "http://placehold.it/200x100"));
	    productService.save(new Product(6L, "Phone", 500.00, "http://placehold.it/200x100"));
	    productService.save(new Product(7L, "Watch", 30.00, "http://placehold.it/200x100"));
	    productService.save(new Product(8L, "Samsung Watch", 30.10, "http://placehold.it/200x100"));
	    productService.save(new Product(9L, "MS Surface Pro 7", 600.20, "http://placehold.it/200x100"));
	    productService.save(new Product(10L, "Samsung S21", 70.00, "http://placehold.it/200x100"));
	    productService.save(new Product(11L, "Computer", 60.00, "http://placehold.it/200x100"));
	};
    }
}

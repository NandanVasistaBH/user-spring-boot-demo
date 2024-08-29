package com.ndn.secureApp.controllers;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


class User {
    public String name;
    public String email;
    public Integer age;
    public User(String name, String email, Integer age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }


    

}
@CrossOrigin(origins = "http://localhost:3000") // allowing cors for each controller locally
@RestController
public class HomeController {
    List<User> list = new ArrayList<>();

    HomeController() {
        list.add(new User("abc","abc@gmail.com",12));
    }
    @GetMapping("/")
    public ResponseEntity<String> home(){
        System.out.println("homeeee");
        return  new ResponseEntity<>("hello world",HttpStatus.OK);
    }
    @GetMapping("/all")
public ResponseEntity<List<User>> getAllUsers() {
    System.out.println("get all");
    return new ResponseEntity<>(list, HttpStatus.OK);
}

    @PostMapping("/user")
public ResponseEntity<String> addUser(@RequestBody User user) {
    list.add(user);
    return new ResponseEntity<>("User created", HttpStatus.OK);
}

    @GetMapping("/user")
    public ResponseEntity<String> searchUser(@RequestParam String email){
        System.out.println(email);
        for(User u:list){
            if(u.email.equals(email)){
                    return  new ResponseEntity<>("User Exists",HttpStatus.OK);

            }
        }
        return  new ResponseEntity<>("Not found",HttpStatus.NOT_FOUND);

    }
    @PutMapping("/user")
    public ResponseEntity<String> update(@RequestParam String email , @RequestParam(required = false) String name,@RequestParam(required = false) Integer age){
        if(age==null || email==null || name==null){
            return new ResponseEntity<>("all the fields need to be present ", HttpStatus.PARTIAL_CONTENT);
        }
        System.out.println(email);
        for(int i=0;i<list.size();i++){
            User u = list.get(i);
            if(u.email.equals(email)){
                u.age=age;
                u.name=name;

                return new ResponseEntity<>("updated" , HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("not found", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/user")
    public ResponseEntity<String> deleteUser(@RequestParam String email){
        System.out.println(email);
        for(int i=0;i<list.size();i++){
            User u = list.get(i);
            if(u.email.equals(email)){
                list.remove(i);
                return new ResponseEntity<>("deleted" , HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("not found", HttpStatus.NOT_FOUND);

    }

}

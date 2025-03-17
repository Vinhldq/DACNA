package main

import "github.com/gin-gonic/gin"

func main() {
	server := gin.Default()

	server.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "FUCK YOU!!!",
		})
	})
	server.Run(":8080")
}
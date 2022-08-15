package demo;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class demoo {

	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Saakshi Saraf\\Downloads\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("http://127.0.0.1:3000");
		Thread.sleep(1000);
		driver.findElement(By.id("username_signin")).sendKeys("jasonpeng");
	
		driver.findElement(By.id("password_signin")).sendKeys("hello123");
		Thread.sleep(2000);
		driver.findElement(By.id("sign_in")).click();
		Thread.sleep(2000);
		driver.findElement(By.className("view-status-div")).click();
		Thread.sleep(2000);
		driver.findElement(By.className("back-button1")).click();
		Thread.sleep(3000);
		
		driver.findElement(By.id("view_loyalty")).click();
		Thread.sleep(3000);
		List<WebElement> l = driver.findElements(By.className("transfer"));
		System.out.println("Number of elements:" + l.size());
		l.get(5).click();
		Thread.sleep(3000);
		driver.findElement(By.className("primary-rect-input")).sendKeys("jasonpeng");
		
		driver.findElement(By.className("membership-no-rect-input")).sendKeys("0824934980");
		
		driver.findElement(By.className("confirm-no-rect-input")).sendKeys("0824934980");
	
		driver.findElement(By.className("verify-rect-button")).click();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
		Thread.sleep(2000);
		driver.findElement(By.id("points")).sendKeys("200");
		Thread.sleep(1000);
		
		
		driver.findElement(By.className("transferbutton")).click();
		Thread.sleep(2000);
	
		driver.findElement(By.className("success-button")).click();
		Thread.sleep(2000);
		
		driver.findElement(By.className("view-status-div")).click();
		Thread.sleep(3000);
		
		driver.findElement(By.className("back-button1")).click();
		Thread.sleep(2000);
		driver.findElement(By.className("back-button1")).click();
		Thread.sleep(2000);
		driver.findElement(By.id("gotoSignin")).click();
		Thread.sleep(2000);
		
		
	
	
		
	
		
	
		driver.close();
		
	}

}

import { useTheme } from "./ThemeContext"
import "./ThemeBlogDemo.css"

const ThemeBlogDemo = () => {
  const { theme } = useTheme();                             

  return (
    <div className={`blog-container theme-${theme}`}>
      <div className="blog-header">
        <h1 className="blog-title">Little Lemon 🍋</h1>
      </div>
      
      <div className="blog-content">
        <h2>When it comes to dough</h2>
        <p>
          We are a pizza loving family. And for years, I searched and searched and searched 
          for the perfect pizza dough recipe. I tried dozens, or more. And while some were good, 
          none of them were that recipe that would make me stop trying all of the others.
        </p>
      </div>
    </div>
  )
}

export default ThemeBlogDemo

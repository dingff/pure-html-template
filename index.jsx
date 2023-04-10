const { useEffect, useState } = React
const { Button } = Next

function Index() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('hello')
  }, [])
  return (
    <div className="container">
      <div className="title">Hello world!</div>
      <div className="tip">你点击了{count}次</div>
      <Button type="primary" onClick={() => setCount(count + 1)}>点击</Button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
      
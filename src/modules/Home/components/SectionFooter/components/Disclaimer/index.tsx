const Disclaimer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={`${className} w-full text-left`} {...props}>
      <h4 className="mb-6">All investing involves risk.</h4>
      <p className=" text-[20px] leading-[1.195]">
        Etiam et faucibus purus, vel fermentum libero. Proin eget egestas
        tortor. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Fusce lacus augue, fermentum at posuere a,
        luctus vel libero. In quis leo vulputate leo varius laoreet sed ac
        neque. Praesent finibus, risus quis scelerisque luctus, ipsum metus
        finibus diam, vitae egestas nulla libero a justo. Donec quis orci
        imperdiet, pretium neque id, pulvinar nisl. Pellentesque in egestas
        sapien, vitae auctor augue. Sed nisl tortor, convallis eu sollicitudin
        commodo, tempus sed urna. Praesent a nisi sed massa finibus luctus.
        Pellentesque vitae diam et dui lacinia egestas. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Vivamus facilisis pellentesque eros, in posuere diam tempor in. Fusce
        semper felis at vehicula commodo.
      </p>
    </div>
  )
}

export default Disclaimer

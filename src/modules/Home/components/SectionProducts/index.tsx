import { Tab, Tabs } from '@mui/material'
import { CATEGORY_ID_ALL, MF_CATEGORIES, PRODUCTS } from './models/constants'
import { useState } from 'react'
import CardProduct from './components/CardProduct'

const SectionProducts = () => {
  const [activeTab, setActiveTab] = useState<number | null>(1)
  const handleTabChange = (_: React.SyntheticEvent, id?: number) => {
    setActiveTab(id || null)
  }
  return (
    <section className="bg-white flex flex-col py-[112px] text-center ml-4 md:ml-[calc(50%-600px)]">
      <div className="flex flex-col items-left w-full text-start mb-[100px]">
        <h2 className="text-primaryTosca font-medium">Best craft for you</h2>
        <h1 className="text-primaryBlue mt-2">Discover Our Products</h1>
      </div>
      <Tabs variant="scrollable" onChange={handleTabChange} value={activeTab}>
        {MF_CATEGORIES.map(item => (
          <Tab
            key={`cat-${item?.id}`}
            sx={{
              textTransform: 'none',
              fontSize: {
                xs: '20px',
                lg: '24px'
              },
              lineHeight: 1.195,
              padding: 0,
              marginRight: {
                xs: '24px',
                lg: '64px'
              },
              justifyContent: 'end'
            }}
            label={item?.name}
            value={item?.id}
            style={{}}
          />
        ))}
      </Tabs>
      <div className="mt-[45px] flex flex-row gap-x-4 overflow-scroll">
        {PRODUCTS.map(item =>
          item?.categoryId == activeTab || activeTab == CATEGORY_ID_ALL ? (
            <CardProduct code={item?.code} name={item?.name} />
          ) : null
        )}
      </div>
    </section>
  )
}

export default SectionProducts

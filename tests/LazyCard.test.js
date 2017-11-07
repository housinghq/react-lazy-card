import React from 'react'
import { expect } from 'chai'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const {describe, it} = global

import LazyCard from '../components'

describe('LazyCard Component', () => {
  it('should set the defaultImage as background if provided', () => {
    const wrapper = shallow(
      <LazyCard image={'a.jpg'} defaultImage={'b.jpg'}/>
    )

    expect(wrapper.find('.rs-img').get(0).props.style.backgroundImage).to.equal('url(\'b.jpg\')')
  })

  it('should set image as background if defaultImage is not provided', () => {
    const wrapper = shallow(
      <LazyCard image={'a.jpg'} lazyLoad={false}/>
    )

    expect(wrapper.find('.rs-img').get(0).props.style.backgroundImage).to.equal('url(\'a.jpg\')')
  })

  it('should load `image` when .load() is called', () => {
    const wrapper = mount(
      <LazyCard
        image='a.jpg'
        defaultImage={'b.jpg'}
      />
    )

    const comp = wrapper.instance()

    const spy = sinon.spy(comp, 'load')

    comp.load()

    expect(spy.calledOnce).to.equal(true)
  })

  it('should set width when the width is passed', () => {
    const wrapper = shallow(
      <LazyCard
        image='a.jpg'
        defaultImage={'b.jpg'}
      />
    )

    wrapper.setProps({
      width: 100
    })

    expect(wrapper.find('.rs-img').get(0).props.style.width).to.equal(100)
  })

  it('should render children when they are passed', () => {
    const child = <div className="child">Hello World</div>
    const wrapper = shallow(
      <LazyCard
        image='a.jpg'
        defaultImage={'b.jpg'}
        index={6}
      >
        {child}
      </LazyCard>
    )

    expect(wrapper.contains(child)).to.equal(true)
  })

  it('should not re-render if the props are same', () => {
    const render = sinon.spy(LazyCard.prototype, 'render')

    const wrapper = shallow(
      <LazyCard
        image='a.jpg'
        defaultImage='b.jpg'
      />
    )

    expect(render.calledOnce).to.equal(true)

    wrapper.setProps({
      image: 'a.jpg'
    })

    expect(render.calledTwice).to.equal(false)

    wrapper.setProps({
      defaultImage: 'c.jpg'
    })

    expect(render.calledTwice).to.equal(true)
  })
})

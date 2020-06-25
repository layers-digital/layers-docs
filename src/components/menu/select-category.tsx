import { Component, Prop, h, Watch } from "@stencil/core";
import { RouterHistory, injectHistory, LocationSegments } from '@stencil/router';

export type SelectCategoryOption = {
  icon: any,
  url: string,
  title: string,
}

@Component({
  tag: 'select-category'
})
export class SelectCategory{
  @Prop() history: RouterHistory;
  @Prop() location: LocationSegments;
  private select?: HTMLDocsSelectElement

  @Prop() options: SelectCategoryOption[]

  @Watch('location')
  locationChanged() {
    let option = this.currentCategory()
    if (this.select && option) {
      this.select.select(option.title)
    }
  }

  currentCategory() {
    const location = this.history.location.pathname
    return this.options.find(serv => location.startsWith(serv.url)) ?? this.options[0]
  }

  selectCategory(ev: CustomEvent<string>) {
    const selected = this.options.find(serv => serv.title == ev.detail)
    if (this.currentCategory() != selected) {
      this.history.push(selected.url)
    }
  }

  renderOption(item: string) {
    const service = this.options.find(serv => serv.title == item)
    const Icon = service.icon
    return (
      <div class="SelectCategory-framework">
        <Icon class="SelectCategory-icon"/>
        <span>{item}</span>
      </div>
    )
  }
  
  render() {
    return (
      <docs-select
        ref={el => this.select = el as HTMLDocsSelectElement}
        class="SelectCategory"
        options={this.options.map(serv => serv.title)}
        optionRenderer={this.renderOption.bind(this)}
        initializer={() => this.currentCategory().title}
        onSelection={(ev) => this.selectCategory(ev)}/>
    )
  }
}

injectHistory(SelectCategory)
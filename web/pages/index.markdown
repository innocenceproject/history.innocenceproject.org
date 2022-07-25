---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
permalink: indexmd:output_ext
---
{% for block in site.timeline-blocks %}
<div class="container px-5">
    <h2 class="year-header">{{ block.year }}</h2>
</div>
  <div class="{{ block.style }}">
    <div class="container px-5 py-6">
        <div class="eyebrow">
            <div class="eyebrow-dot"></div>
            <div class="eyebrow-header">{{ block.category }}</div>
        </div>
        <div class="header-container">
            <div class="header-icon">
                <img src="{{ site.baseurl }}/assets/images/{{ block.icon }}" alt="{{ block.icon-alt }}"/>
            </div>
            <div class="timeline-header">{{ block.header }}</div>
        </div>
        <div class="timeline-subheader">{{ block.sub-header }}</div>
        <div class="timeline-image">
            <img src="{{ site.baseurl }}/assets/images/{{ block.image }}" alt="{{ block.image-alt-text }}"/>
        </div>
        <div class="description-bullet"></div>
        <div class="timeline-description">{{ block.description }}</div>
    </div>
  </div>
{% unless forloop.last %}
  <div class="divider"></div>
{% endunless %}
{% endfor %}
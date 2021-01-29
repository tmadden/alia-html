#ifndef ALIA_HTML_BOOTSTRAP_HPP
#define ALIA_HTML_BOOTSTRAP_HPP

#include <alia/html/widgets.hpp>

namespace alia { namespace html { namespace bootstrap {

// BREADCRUMB

struct breadcrumb
{
    scoped_element nav;
    scoped_element ol;

    breadcrumb()
    {
    }
    breadcrumb(html::context ctx)
    {
        this->begin(ctx);
    }
    ~breadcrumb()
    {
        this->end();
    }

    breadcrumb&
    begin(html::context ctx)
    {
        this->nav.begin(ctx, "nav").attr("aria-label", "breadcrumb");
        this->ol.begin(ctx, "ol").class_("breadcrumb");
        return *this;
    }
    void
    end()
    {
        this->ol.end();
        this->nav.end();
    }

    template<class Link>
    element_handle
    item(Link&& link)
    {
        return element(this->nav.context(), "li")
            .class_("breadcrumb-item")
            .children([&] { std::forward<Link>(link)(); });
    }

    element_handle
    active_item()
    {
        return element(this->nav.context(), "li")
            .classes("breadcrumb-item active")
            .attr("aria-current", "page");
    }

    template<class Label>
    element_handle
    active_item(Label label)
    {
        return active_item().text(label);
    }
};

// BUTTONS

// button - Note that for this overload you MUST also add a style class (e.g.,
// "btn-primary"). Alternatively, you can use one of the overloads below.
template<class... Args>
element_handle
button(Args&&... args)
{
    return html::button(std::forward<Args>(args)...).class_("btn");
}

template<class... Args>
element_handle
primary_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-primary");
}

template<class... Args>
element_handle
secondary_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-secondary");
}

template<class... Args>
element_handle
success_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-success");
}

template<class... Args>
element_handle
danger_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-danger");
}

template<class... Args>
element_handle
warning_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-warning");
}

template<class... Args>
element_handle
info_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-info");
}

template<class... Args>
element_handle
light_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-light");
}

template<class... Args>
element_handle
dark_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-dark");
}

template<class... Args>
element_handle
link_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-link");
}

template<class... Args>
element_handle
outline_primary_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-outline-primary");
}

template<class... Args>
element_handle
outline_secondary_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-outline-secondary");
}

template<class... Args>
element_handle
outline_success_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-outline-success");
}

template<class... Args>
element_handle
outline_danger_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-outline-danger");
}

template<class... Args>
element_handle
outline_warning_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-outline-warning");
}

template<class... Args>
element_handle
outline_info_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-outline-info");
}

template<class... Args>
element_handle
outline_light_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-outline-light");
}

template<class... Args>
element_handle
outline_dark_button(Args&&... args)
{
    return button(std::forward<Args>(args)...).class_("btn-outline-dark");
}

// CHECKBOXES

namespace detail {
element_handle
checkbox(html::context ctx, duplex<bool> value, readable<std::string> label);
}
template<class Label>
element_handle
checkbox(html::context ctx, duplex<bool> value, Label label)
{
    return detail::checkbox(ctx, value, signalize(label));
}

// MISCELLANEOUS

// Do the 'x' that serves as a close button.
html::element_handle
close_button(html::context ctx);

// MODALS

// Do the 'x' in the top right corner of a modal that serves as a close button.
html::element_handle
modal_close_button(html::context ctx);

// Do a standard modal header with a title and a close button.
template<class Title>
html::element_handle
standard_modal_header(html::context ctx, Title const& title)
{
    return div(ctx, "modal-header", [&] {
        element(ctx, "h5").class_("modal-title").text(title);
        modal_close_button(ctx);
    });
}

// Do a modal header with custom content.
// This wraps the content in a 'modal-header' div and supplies a close button.
template<class Content>
html::element_handle
modal_header(html::context ctx, Content&& content)
{
    return div(ctx, "modal-header", [&] {
        invoke_component_function(ctx, std::forward<Content>(content));
        modal_close_button(ctx);
    });
}

// Do a modal body with custom content.
// This wraps the content in a 'modal-body' div.
template<class Content>
html::element_handle
modal_body(html::context ctx, Content&& content)
{
    return div(ctx, "modal-body", [&] {
        invoke_component_function(ctx, std::forward<Content>(content));
    });
}

// Do a modal footer with custom content.
// This wraps the content in a 'modal-footer' div.
template<class Content>
html::element_handle
modal_footer(html::context ctx, Content&& content)
{
    return div(ctx, "modal-footer", [&] {
        invoke_component_function(ctx, std::forward<Content>(content));
    });
}

// Close the active modal.
void
close_modal();

struct modal_data
{
    tree_node<element_object> root;
    bool active = false;
};

struct modal_handle
{
    void
    activate();

    modal_data& data;
    int asmdom_id;
};

// Define a modal.
modal_handle
modal(html::context ctx, alia::function_view<void()> content);

}}} // namespace alia::html::bootstrap

#endif

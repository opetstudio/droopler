<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* profiles/contrib/droopler/modules/custom/d_p_form/templates/paragraph--d-p-form.html.twig */
class __TwigTemplate_b606911a1fd0f95741ae0b2b157b7febbe8a15062293be0a05fae2a49b7374c6 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'paragraph' => [$this, 'block_paragraph'],
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 41, "block" => 50];
        $filters = ["clean_class" => 43, "escape" => 51];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'block'],
                ['clean_class', 'escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 41
        $context["classes"] = [0 => "paragraph", 1 => ("paragraph--type--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(        // line 43
($context["paragraph"] ?? null), "bundle", [])))), 2 => ((        // line 44
($context["view_mode"] ?? null)) ? (("paragraph--view-mode--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null))))) : (""))];
        // line 46
        $context["paragraph_classes"] = [0 => "paragraph-d-form", 1 => "background-image"];
        // line 50
        $this->displayBlock('paragraph', $context, $blocks);
    }

    public function block_paragraph($context, array $blocks = [])
    {
        // line 51
        echo "  <section ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["wrapper_attributes"] ?? null)), "html", null, true);
        echo ">
    <div";
        // line 52
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
      <div ";
        // line 53
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["paragraph_attributes"] ?? null), "addClass", [0 => ($context["paragraph_classes"] ?? null)], "method")), "html", null, true);
        echo ">
        <div class=\"content-wrapper\">
          <div class=\"container\">
            <div class=\"row justify-content-center\">
              <div class=\"col-md-8\">
                ";
        // line 58
        $this->displayBlock('content', $context, $blocks);
        // line 61
        echo "              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
";
    }

    // line 58
    public function block_content($context, array $blocks = [])
    {
        // line 59
        echo "                  ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null)), "html", null, true);
        echo "
                ";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/droopler/modules/custom/d_p_form/templates/paragraph--d-p-form.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  102 => 59,  99 => 58,  88 => 61,  86 => 58,  78 => 53,  74 => 52,  69 => 51,  63 => 50,  61 => 46,  59 => 44,  58 => 43,  57 => 41,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/droopler/modules/custom/d_p_form/templates/paragraph--d-p-form.html.twig", "/opt/lampp/htdocs/droopler/web/profiles/contrib/droopler/modules/custom/d_p_form/templates/paragraph--d-p-form.html.twig");
    }
}
